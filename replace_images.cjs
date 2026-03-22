const fs = require('fs');
const path = require('path');

const mapping = {
  'wedding': '/gallery/gala_dinner.jpg',
  'anniversary': '/gallery/anniversary_toast.png',
  'birthday': '/gallery/birthday_party.png',
  'reunion': '/gallery/gala_dinner.jpg',
  'baptism': '/gallery/baptisim_candles.png',
  'memorial': '/gallery/memorial_service.png',
  'custom': '/gallery/red_table_setup.jpg',
  'catering': '/gallery/red_table_setup.jpg',
  'decor': '/gallery/balloon_bouquet.jpg',
  'photography': '/gallery/anniversary_toast.png',
  'light & sound': '/gallery/birthday_party.png',
  'venue liaison': '/gallery/corporate_gala.png',
  'celebratory': '/gallery/gala_dinner.jpg',
  'religious': '/gallery/baptism_decor.jpg'
};

const defaultImage = '/gallery/gala_dinner.jpg';

const targetDirs = [
  'c:/Users/ACER/OneDrive/Desktop/new/project/pages',
  'c:/Users/ACER/OneDrive/Desktop/new/project/components',
  'c:/Users/ACER/OneDrive/Desktop/new/project'
];

function processFile(filePath) {
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return;
  const ext = path.extname(filePath);
  if (!['.jsx', '.js', '.css', '.html'].includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Global unsplash regex replacement
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?[^"'\s\)\`]+/g;
  
  content = content.replace(regex, (match, offset, str) => {
    modified = true;
    
    // Attempt to guess context by looking at the 50 characters before the URL
    const context = str.substring(Math.max(0, offset - 50), offset).toLowerCase();
    
    for (const [key, imagePath] of Object.entries(mapping)) {
      if (context.includes(key.toLowerCase())) {
        return imagePath;
      }
    }
    
    // Guess by looking at the 50 characters after the URL
    const contextAfter = str.substring(offset, Math.min(str.length, offset + 150)).toLowerCase();
    for (const [key, imagePath] of Object.entries(mapping)) {
      if (contextAfter.includes(key.toLowerCase())) {
        return imagePath;
      }
    }
    
    // Random/fallback assignment to distribute the beautiful images evenly
    const fallbacks = Object.values(mapping);
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed Unsplash links in:', filePath);
  }
}

targetDirs.forEach(dir => {
  if (dir === 'c:/Users/ACER/OneDrive/Desktop/new/project') {
    // Just process root files
    ['index.html', 'index.css', 'constants.jsx', 'App.jsx'].forEach(file => {
      processFile(path.join(dir, file));
    });
  } else {
    fs.readdirSync(dir).forEach(file => {
      processFile(path.join(dir, file));
    });
  }
});
