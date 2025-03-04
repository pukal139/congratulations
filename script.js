function getBrightColor() {
  let r = Math.floor(Math.random() * 156) + 100; // 100-255 (яркие цвета)
  let g = Math.floor(Math.random() * 156) + 100;
  let b = Math.floor(Math.random() * 156) + 100;
  return `rgb(${r}, ${g}, ${b})`;
}

function updateGradient() {
  const color1 = getBrightColor();
  const color2 = getBrightColor();
  document.body.style.background = `linear-gradient(65deg, ${color1}, ${color2})`;
}
