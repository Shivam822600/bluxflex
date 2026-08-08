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
  }
} catch (err) {
  console.error('Error copying brochure:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
