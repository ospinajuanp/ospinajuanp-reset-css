const sass = require('sass');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'scss');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Get all .scss files in the srcDir that don't start with '_'
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.scss') && !f.startsWith('_'));

files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(distDir, file.replace('.scss', '.css'));

  try {
    const result = sass.compile(srcPath, { style: 'compressed' });
    fs.writeFileSync(destPath, result.css);
    console.log(`✅ Compiled: ${destPath}`);
  } catch (err) {
    console.error(`❌ Compilation error for ${srcPath}:`);
    console.error(err.message);
  }
});
