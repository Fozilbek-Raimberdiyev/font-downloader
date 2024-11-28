const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const { logMessageConsole ,getFontWeight} = require('../src/utils');
const program = new Command();

async function downloadFont(url, outputPath) {
    // Ensure the directory exists
    const dir = path.dirname(outputPath);
    fs.mkdirSync(dir, { recursive: true });

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer'
    });

    fs.writeFileSync(outputPath, response.data);
}

program
    .argument('<fontName>', 'name of the font to download')
    .action(async (fontName) => {
        let fileRefs = [];
        try {
            const res = await axios.get('https://fonts.google.com/download/list?family=' + fontName);
            const jsonData = JSON.parse(res?.data?.replace(`)]}'`, ''));
            fileRefs = jsonData?.manifest?.fileRefs;
        } catch (e) {
            if(e?.response?.data?.includes(`)]}'`)) {
                const error = JSON.parse(e?.response?.data?.replace(`)]}'`, ''))?.error;
            logMessageConsole(error,"error");
            } else {
                logMessageConsole("Error occured. Please try again!","error")
            }
            return;
        }

        // Define the target directory
        const targetDir = path.join('src', 'assets', 'fonts', fontName.toLowerCase());

        // Ensure the target directory exists
        fs.mkdirSync(targetDir, { recursive: true });
        console.log("Saving...")
        // Download all font files to the target directory
        await Promise.all(
            fileRefs.map(font => downloadFont(font.url, path.join(targetDir, font.filename)))
        );

        // Generate the CSS file in the same directory
        const cssContent = fileRefs.map(font => {
            return `
@font-face {
    font-family: '${fontName}';
    src: url('./${font.filename}') format('truetype');
    font-weight: ${getFontWeight(font)};
    font-style: ${font.filename?.includes('Italic') ? 'italic' : 'normal'};
}`;
        }).join('\n');
        fs.writeFileSync(path.join(targetDir, `${fontName.toLowerCase()}.css`), cssContent);
        logMessageConsole(`Font ${fontName} downloaded and CSS file generated in ${targetDir}.`)
    });

module.exports = { program };
