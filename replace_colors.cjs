const fs = require('fs');
const path = require('path');

const srcDir = __dirname;

const replacements = {
  'space-indigo': 'vampire-hunter',
  'dusty-grape': 'garden-green',
  'lilac-ash': 'calypso-berry',
  'almond-silk': 'coral-haze',
  'seashell': 'amnesiac-white'
};

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Don't go into node_modules or .git
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkDir(filePath);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      if (file === 'replace_colors.js') return;
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      for (const [oldClass, newClass] of Object.entries(replacements)) {
        // use regex to replace global matches
        const regex = new RegExp(oldClass, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newClass);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

walkDir(path.join(srcDir, 'components'));
walkDir(path.join(srcDir, 'pages'));
walkDir(srcDir);
console.log('Finished replacing color classes.');
