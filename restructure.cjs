const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('src');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
const utilsDir = path.join(srcDir, 'utils');
if (!fs.existsSync(utilsDir)) fs.mkdirSync(utilsDir);
const configDir = path.join(srcDir, 'config');
if (!fs.existsSync(configDir)) fs.mkdirSync(configDir);
const scriptsDir = path.resolve('scripts');
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir);

function moveFile(src, dest) {
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log('Moved', path.basename(src), 'to', path.relative(path.resolve('.'), dest));
  }
}

moveFile(path.resolve('App.jsx'), path.join(srcDir, 'App.jsx'));
moveFile(path.resolve('index.jsx'), path.join(srcDir, 'index.jsx'));
moveFile(path.resolve('index.css'), path.join(srcDir, 'index.css'));
moveFile(path.resolve('components'), path.join(srcDir, 'components'));
moveFile(path.resolve('pages'), path.join(srcDir, 'pages'));
moveFile(path.resolve('firebase.js'), path.join(configDir, 'firebase.js'));
moveFile(path.resolve('constants.jsx'), path.join(utilsDir, 'constants.jsx'));
moveFile(path.resolve('jquery.effects.js'), path.join(utilsDir, 'jquery.effects.js'));
moveFile(path.resolve('fix.cjs'), path.join(scriptsDir, 'fix.cjs'));

if (fs.existsSync(path.resolve('types.js'))) fs.unlinkSync(path.resolve('types.js'));

const indexHtml = path.resolve('index.html');
if (fs.existsSync(indexHtml)) {
  let content = fs.readFileSync(indexHtml, 'utf8');
  content = content.replace('src="/index.jsx"', 'src="/src/index.jsx"');
  fs.writeFileSync(indexHtml, content);
  console.log('Updated index.html');
}

function replaceImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // For components or pages, they moved from /components to /src/components, preserving relative hierarchy internally,
  // but their relative path to utils/config changed from ../ to ../utils/ or ../config/
  const isAppOrIndex = filePath === path.join(srcDir, 'App.jsx') || filePath === path.join(srcDir, 'index.jsx');
  const isComponentOrPage = filePath.includes('components') || filePath.includes('pages');

  if (isAppOrIndex) {
    content = content.replace(/from\s+["']\.\/constants(?:\.jsx)?["']/g, 'from "./utils/constants"');
    content = content.replace(/from\s+["']\.\/firebase(?:\.js)?["']/g, 'from "./config/firebase"');
    content = content.replace(/from\s+["']\.\/jquery\.effects(?:\.js)?["']/g, 'from "./utils/jquery.effects"');
  } else if (isComponentOrPage) {
    content = content.replace(/from\s+["']\.\.\/constants(?:\.jsx)?["']/g, 'from "../utils/constants"');
    content = content.replace(/from\s+["']\.\.\/firebase(?:\.js)?["']/g, 'from "../config/firebase"');
    content = content.replace(/from\s+["']\.\.\/jquery\.effects(?:\.js)?["']/g, 'from "../utils/jquery.effects"');
  }

  // Handle direct imports of index.css
  if (filePath === path.join(srcDir, 'index.jsx')) {
    content = content.replace(/import\s+['"]\.\/index\.css['"]/g, 'import "./index.css"');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated imports in', path.relative(path.resolve('.'), filePath));
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (['.js', '.jsx'].some(ext => fullPath.endsWith(ext))) {
      replaceImports(fullPath);
    }
  }
}

processDirectory(srcDir);
