import fs from 'fs';
import path from 'path';
import https from 'https';

const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets', 'images');
const OFFICIAL_DIR = path.join(ASSETS_DIR, 'official');

if (!fs.existsSync(OFFICIAL_DIR)) {
  fs.mkdirSync(OFFICIAL_DIR, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve([]); }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) return resolve(dest);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => resolve(false)); // Just skip if 404
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => resolve(false));
    });
  });
}

async function run() {
  const dirs = [path.join(process.cwd(), 'src', 'pages'), path.join(process.cwd(), 'src', 'components')];
  const files = [];
  
  function getFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        getFiles(fullPath);
      } else if (fullPath.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  dirs.forEach(d => getFiles(d));

  const uniqueImages = new Map();

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const importRegex = /import\s+(\w+)\s+from\s+['"](?:\.\.\/)+assets\/images\/([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const imgPath = match[2];
      const cleanImgPath = imgPath.split('?')[0];
      
      if (!uniqueImages.has(cleanImgPath) && !cleanImgPath.startsWith('official/')) {
        let baseSearch = cleanImgPath.replace(/\.[^/.]+$/, "");
        baseSearch = baseSearch.replace(/-\d+x\d+$/, "").replace(/-md$/, "").replace(/_md$/, "");
        
        uniqueImages.set(cleanImgPath, {
          originalPath: cleanImgPath,
          baseSearch: baseSearch
        });
      }
    }
  }

  console.log(`Found ${uniqueImages.size} unique image imports to check.`);

  const mappings = {};
  for (const [originalPath, info] of uniqueImages.entries()) {
    try {
      const results = await fetchJson(`https://bulkflex.com/wp-json/wp/v2/media?search=${encodeURIComponent(info.baseSearch)}`);
      if (results && results.length > 0) {
        let bestMatch = results[0];
        let sourceUrl = bestMatch.source_url;
        
        if (bestMatch.media_details && bestMatch.media_details.sizes && bestMatch.media_details.sizes.full) {
            sourceUrl = bestMatch.media_details.sizes.full.source_url;
        }

        const ext = path.extname(sourceUrl) || '.jpg';
        const safeName = info.baseSearch.replace(/[^a-zA-Z0-9_-]/g, '_') + ext;
        const localDest = path.join(OFFICIAL_DIR, safeName);
        
        console.log(`Downloading high-res: ${info.baseSearch} -> ${safeName}`);
        await downloadImage(sourceUrl, localDest);
        mappings[originalPath] = `official/${safeName}`;
      }
    } catch (e) {
      // silent fail for non-matches
    }
  }

  let updatedCount = 0;
  for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    for (const [oldPath, newPath] of Object.entries(mappings)) {
      const toReplace1 = `assets/images/${oldPath}?url`;
      const toReplace2 = `assets/images/${oldPath}`;
      
      if (content.includes(toReplace1)) {
        content = content.split(toReplace1).join(`assets/images/${newPath}?url`);
        modified = true;
      } else if (content.includes(toReplace2)) {
        content = content.split(toReplace2).join(`assets/images/${newPath}`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedCount++;
    }
  }

  console.log(`\nSuccess! Updated ${updatedCount} files with official high-res images.`);
}

run();
