const fs = require('fs/promises');

async function sendPage(filename) {
  const errorfile = await fs.readFile('404.html', 'utf8');
  try {
    if (filename === '/') {
      const data = await fs.readFile('index.html', 'utf8');
      return data;
    }
    const data = await fs.readFile(filename.substring(1) + '.html', 'utf8');
    return data;
  } catch(err) {
    return errorfile;
  }
}

module.exports = sendPage;