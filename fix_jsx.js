import fs from 'fs';
import path from 'path';

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');

function run() {
  const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));
  let updated = 0;

  for (const file of files) {
    const filePath = path.join(PAGES_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix src="${asset_...}" to src={asset_...}
    const srcRegex = /src="\$\{([^}]+)\}"/g;
    if (srcRegex.test(content)) {
      content = content.replace(srcRegex, 'src={$1}');
      modified = true;
    }

    // Fix srcset="${asset_...} ... " to srcSet={`${asset_...} ... `}
    const srcsetRegex = /srcset="([^"]+)"/g;
    if (srcsetRegex.test(content)) {
      content = content.replace(srcsetRegex, (match, inner) => {
        return 'srcSet={`' + inner + '`}';
      });
      modified = true;
    }

    // Fix class=" to className="
    const classRegex = /class="/g;
    if (classRegex.test(content)) {
      content = content.replace(/class="/g, 'className="');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updated++;
    }
  }

  console.log(`Fixed JSX errors in ${updated} files.`);
}

run();
