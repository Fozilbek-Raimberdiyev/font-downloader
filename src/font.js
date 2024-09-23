const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchFontData(fontName) {
  const apiUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching font:', error);
    return null;
  }
}

async function downloadFont(url, outputPath) {
  const writer = fs.createWriteStream(outputPath);
  const response = await axios.get(url, { responseType: 'stream' });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

function generateCSS(fontName, fontFiles) {
  let cssContent = `@font-face { font-family: '${fontName}';\n`;
  fontFiles.forEach(file => {
    const format = path.extname(file).slice(1);
    cssContent += `  src: url('${file}') format('${format}');\n`;
  });
  cssContent += '}';
  return cssContent;
}

function extractFontUrls(cssContent) {
  const urlRegex = /url\((https:\/\/[^)]+)\)/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(cssContent)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

module.exports = {
  fetchFontData,
  downloadFont,
  generateCSS,
  extractFontUrls
};
