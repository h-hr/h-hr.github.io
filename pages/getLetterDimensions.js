function getLetterDimensions(character) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  const text = document.createElementNS(svgNS, 'text');
  text.textContent = character;
  svg.appendChild(text);
  document.body.appendChild(svg);

  const bbox = text.getBBox();
  const dimensions = { width: bbox.width, height: bbox.height };

  document.body.removeChild(svg);

  return dimensions;
}
