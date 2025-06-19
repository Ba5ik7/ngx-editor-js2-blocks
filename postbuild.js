// File: postbuild.js

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const libName = process.argv[2];

if (!libName) {
  console.error('[postbuild] No library name provided. Usage: node postbuild.js <lib-name>');
  process.exit(1);
}

const libDistPath = path.join(DIST_DIR, libName);
const srcStylesPath = path.join(libDistPath, 'src/styles');
const targetStylesPath = path.join(libDistPath, 'styles');

if (fs.existsSync(srcStylesPath)) {
  fs.mkdirSync(targetStylesPath, { recursive: true });

  fs.readdirSync(srcStylesPath).forEach((file) => {
    const srcFile = path.join(srcStylesPath, file);
    const destFile = path.join(targetStylesPath, `${libName}-${file}`);

    fs.copyFileSync(srcFile, destFile);
    console.log(`[postbuild] Copied ${srcFile} → ${destFile}`);
  });
} else {
  console.log(`[postbuild] No styles found for ${libName}`);
}