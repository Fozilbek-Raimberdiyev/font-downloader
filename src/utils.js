/**
 * @param {string} message
 * @param {string} type "info" | "error" | "success"
 */
function logMessageConsole(message, type = "info") {
  const info = "\x1b[32m";
  const error = "\x1b[31m";
  const reset = "\x1b[0m";
  const success = "\x1b[32m";
  console.log(
    `${
      type === "info" ? info : type === "error" ? error : success
    }${message}${reset}`
  );
}

function getFontWeight(font) {
  const weightMap = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
    ThinItalic: 100,
    ExtraLightItalic: 200,
    LightItalic: 300,
    RegularItalic: 400,
    MediumItalic: 500,
    SemiBoldItalic: 600,
    BoldItalic: 700,
    ExtraBoldItalic: 800,
    BlackItalic: 900
  };

  // Extract weight and style from filename using regex
  const match = font.filename.match(/-([A-Za-z]+)(Italic)?\.ttf$/);
  if (match) {
    const weight = match[1]; // Extract weight name
    return weightMap[weight] || 400; // Map to weight value or default to Regular
  }
  // Default to Regular if no match
  return 400;
}
module.exports = {
  logMessageConsole,
  getFontWeight,
};
