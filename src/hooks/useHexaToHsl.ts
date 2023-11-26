const useHexaToHsl = (hex: string): string => {
  hex = hex.replace(/^#/, "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    if (max === r) {
      hue = ((g - b) / (max - min) + 6) % 6;
    } else if (max === g) {
      hue = (b - r) / (max - min) + 2;
    } else {
      hue = (r - g) / (max - min) + 4;
    }

    hue *= 60;
    saturation = (max - min) / (1 - Math.abs(2 * lightness - 1));
  }

  saturation = Math.max(0, Math.min(100, saturation * 100));
  lightness = Math.max(0, Math.min(100, lightness * 100));

  return `hsl(${Math.floor(hue)}, ${Math.floor(saturation)}%, ${Math.floor(
    lightness,
  )}%)`;
};

export default useHexaToHsl;
