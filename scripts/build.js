import fs from 'node:fs';
import { execSync } from 'node:child_process';

if (!fs.existsSync('index.source.html')) {
  fs.copyFileSync('index.html', 'index.source.html');
}
fs.copyFileSync('index.source.html', 'index.html');

console.log('Building project with Vite...');
execSync('npx vite build --outDir dist', { stdio: 'inherit' });

console.log('Copying production build to project root and docs/...');
fs.copyFileSync('dist/index.html', 'index.html');
fs.writeFileSync('.nojekyll', '');

if (fs.existsSync('dist/assets')) {
  fs.cpSync('dist/assets', 'assets', { recursive: true });
}
if (fs.existsSync('dist/photos')) {
  fs.cpSync('dist/photos', 'photos', { recursive: true });
}
if (fs.existsSync('dist/music')) {
  fs.cpSync('dist/music', 'music', { recursive: true });
}

fs.mkdirSync('docs', { recursive: true });
fs.cpSync('dist', 'docs', { recursive: true });
fs.writeFileSync('docs/.nojekyll', '');

console.log('Build complete! Root index.html and docs/ are both ready.');
