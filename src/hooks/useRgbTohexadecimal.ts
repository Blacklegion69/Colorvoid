const useRgbTohexadecimal = (rgbColorCode: string) => {
  function rgbToHexa(rgbColorCode: string) {
    // Extract the RGB values from the input string
    const rgbValues = rgbColorCode.match(/\d+/g);
    const red = parseInt(rgbValues ? rgbValues[0] : "255");
    const green = parseInt(rgbValues ? rgbValues[1] : "255");
    const blue = parseInt(rgbValues ? rgbValues[2] : "255");

    // Convert each RGB value to its hexadecimal equivalent
    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    // Concatenate the hexadecimal values to create the final color code
    const hexadecimalColorCode = `#${redHex}${greenHex}${blueHex}`;
    return hexadecimalColorCode;
  }
  return rgbToHexa(rgbColorCode);
};

export default useRgbTohexadecimal;
