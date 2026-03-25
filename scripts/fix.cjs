const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      // Fix esbuild default exports
      // It looks like:
      // var stdin_default = NAME;
      // export {
      //   stdin_default as default
      // };
      
      const regex = /var\s+stdin_default\s*=\s*(.*?);\s*export\s*\{\s*stdin_default\s*as\s*default\s*M?\};\s*/g;
      
      if (code.includes('stdin_default')) {
         code = code.replace(/var\s+stdin_default\s*=\s*([^;]+);[\s\n]*export\s*\{\s*stdin_default\s*as\s*default\s*\};/g, 'export default $1;');
         fs.writeFileSync(fullPath, code);
         console.log(`Fixed exports in ${fullPath}`);
      }
    }
  }
}

walk(process.cwd());
