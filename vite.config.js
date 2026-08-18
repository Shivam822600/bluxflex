import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Copy brochure PDF to public folder for production/Vercel support
try {
  const source = path.join(process.cwd(), 'Bulk Flex Broschure- Compressed.pdf');
  const dest = path.join(process.cwd(), 'public', 'Bulk_Flex_Brochure_Compressed.pdf');
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('Successfully copied brochure to public/Bulk_Flex_Brochure_Compressed.pdf');
  } else {
    // Check with lowercase / spelling variations just in case
    const files = fs.readdirSync(process.cwd());
    const matchedFile = files.find(f => f.toLowerCase().includes('compressed.pdf') || f.toLowerCase().includes('brochure'));
    if (matchedFile) {
      fs.copyFileSync(path.join(process.cwd(), matchedFile), dest);
      console.log(`Successfully copied matched brochure (${matchedFile}) to public/Bulk_Flex_Brochure_Compressed.pdf`);
    } else {
      console.log('Source brochure PDF not found in root.');
    }
  // Copy generated hero graphic to assets and public
  const heroImgSrc = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/a3127571-965d-4574-bd69-a4c75e439fe4/bulkflex_packaging_cutout_1787088844791.jpg';
  const heroImgDest = path.join(process.cwd(), 'src', 'assets', 'images', 'bulkflex_hero_cutout.jpg');
  const heroImgPublic = path.join(process.cwd(), 'public', 'bulkflex_hero_cutout.jpg');
  if (fs.existsSync(heroImgSrc)) {
    fs.copyFileSync(heroImgSrc, heroImgDest);
    fs.copyFileSync(heroImgSrc, heroImgPublic);
    console.log('Successfully copied pure cutout packaging hero graphic.');
  }
} catch (err) {
  console.error('Error copying brochure or hero image:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
