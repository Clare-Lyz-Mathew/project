const fs = require('fs');
const path = require('path');

const directoryPaths = [
  path.join(__dirname, 'pages'),
  path.join(__dirname, 'components'),
  __dirname
];

const colorMappings = {
  // Legacy colors
  'azur': 'navy',
  'sandstone': 'mist',
  'viridian': 'slate',
  'heather': 'navy',
  'candy': 'mauve',
  // Abstract colors
  'vampire-hunter': 'navy',
  'vampire-hunter/': 'navy/',
  'amnesiac-white': 'mist',
  'amnesiac-white/': 'mist/',
  'coral-haze': 'mauve',
  'coral-haze/': 'mauve/',
  'calypso-berry': 'plum',
  'calypso-berry/': 'plum/',
  'garden-green': 'slate',
  'garden-green/': 'slate/'
};

function processFile(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.html') && !filePath.endsWith('.css')) return;
  if (filePath.includes('node_modules')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Use word boundaries for replacement to prevent replacing "navy" inside another word.
  for (const [oldName, newName] of Object.entries(colorMappings)) {
    // Escape forward slashes in regex
    const escapedOld = oldName.replace(/\//g, '\\/');
    // If it ends with a slash, we don't need word boundary at the end since tailwind opacity follows
    if (oldName.endsWith('/')) {
        const regex = new RegExp(`\\b${escapedOld}`, 'g');
        content = content.replace(regex, newName);
    } else {
        const regex = new RegExp(`\\b${escapedOld}\\b`, 'g');
        content = content.replace(regex, newName);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated colors in ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      processFile(fullPath);
    }
  }
}

directoryPaths.forEach(dir => {
    if (dir === __dirname) {
        processFile(path.join(dir, 'index.html'));
        processFile(path.join(dir, 'index.css'));
        processFile(path.join(dir, 'App.jsx'));
        processFile(path.join(dir, 'constants.jsx'));
    } else {
        walkDir(dir);
    }
});
console.log('Color renaming complete.');
