function mergeColors(color1, color2) {
  // Convert color names to hex strings
  let hex1 = convertColorNameToHex(color1);
  let hex2 = convertColorNameToHex(color2);

  if (!hex1 || !hex2) {
    throw new Error('Invalid input color(s)');
  }

  // Convert the color strings to RGB values
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  // Calculate the average of each RGB component
  const r = Math.round((rgb1.r + rgb2.r) / 2);
  const g = Math.round((rgb1.g + rgb2.g) / 2);
  const b = Math.round((rgb1.b + rgb2.b) / 2);

  // Convert the RGB values back to a hex color string
  const hex = rgbToHex(r, g, b);

  if (!hex) {
    throw new Error('Error converting RGB to hex');
  }

  return hex;
}

// Helper function to convert a hex color string to an object with RGB values
function hexToRgb(hex) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) {
    throw new Error(`Invalid hex color string: ${hex}`);
  }
  const r = parseInt(match[1], 16);
  const g = parseInt(match[2], 16);
  const b = parseInt(match[3], 16);
  return { r, g, b };
}

// Helper function to convert RGB values to a hex color string
function rgbToHex(r, g, b) {
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error('Invalid RGB value(s)');
  }
  const clamp = (num) => Math.min(255, Math.max(0, num));
  const hexR = clamp(Math.round(r)).toString(16).padStart(2, '0');
  const hexG = clamp(Math.round(g)).toString(16).padStart(2, '0');
  const hexB = clamp(Math.round(b)).toString(16).padStart(2, '0');
  return `#${hexR}${hexG}${hexB}`;
}

// Helper function to convert a color name to a hex color string
function convertColorNameToHex(color) {
  const el = document.createElement('div');
  el.style.color = color;
  const rgbColor = window.getComputedStyle(document.body.appendChild(el)).color;
  document.body.removeChild(el);
  const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return null;
  }
  return rgbToHex(match[1], match[2], match[3]);
}
