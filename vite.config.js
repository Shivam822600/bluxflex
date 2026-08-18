import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Copy brochure PDF & hero cutout to public / assets folders if available
try {
  const source = path.join(process.cwd(), 'Bulk Flex Broschure- Compressed.pdf');
  const dest = path.join(process.cwd(), 'public', 'Bulk_Flex_Brochure_Compressed.pdf');
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('Successfully copied brochure to public/Bulk_Flex_Brochure_Compressed.pdf');
  }

  // Copy local hero cutout to project asset directory if found
  const heroImgSrc = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/a3127571-965d-4574-bd69-a4c75e439fe4/bulkflex_packaging_cutout_1787088844791.jpg';
  const heroImgDest = path.join(process.cwd(), 'src', 'assets', 'images', 'bulkflex_hero_cutout.jpg');
  const heroImgPublic = path.join(process.cwd(), 'public', 'bulkflex_hero_cutout.jpg');
  if (fs.existsSync(heroImgSrc)) {
    if (!fs.existsSync(path.dirname(heroImgDest))) {
      fs.mkdirSync(path.dirname(heroImgDest), { recursive: true });
    }
    fs.copyFileSync(heroImgSrc, heroImgDest);
    fs.copyFileSync(heroImgSrc, heroImgPublic);
    console.log('Successfully copied hero cutout to assets and public.');
  }
} catch (err) {
  console.log('Build asset preparation notice:', err.message);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

