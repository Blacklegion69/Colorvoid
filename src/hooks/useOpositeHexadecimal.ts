import useHexaToRgb from "./useHexaToRgb";
import useRgbTohexadecimal from "./useRgbTohexadecimal";

export default function useOpositeHexadecimal(hexadecimal: string) {
  const generateOposite = (hexadecimal: string) => {
    const rgb = useHexaToRgb(hexadecimal);
    const rgbValues = rgb.match(/\d+/g);
    const r = parseInt(rgbValues ? rgbValues[0] : "255");
    const g = parseInt(rgbValues ? rgbValues[1] : "255");
    const b = parseInt(rgbValues ? rgbValues[2] : "255");
    const opositergb = `rgb(${255 - r},${255 - g},${255 - b})`;
    const oposite = useRgbTohexadecimal(opositergb);
    return oposite;
  };
  return generateOposite(hexadecimal);
}
