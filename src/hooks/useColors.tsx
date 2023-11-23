import useHexadecimal from "./useHexadecimal";

const useColors = (): string[] => {
  let final: string[] = [];
  const limit = 300;
  for (let i = 0; i < limit; i++) {
    const hexacode = useHexadecimal();
    final.push(hexacode);
  }
  return final;
};

export default useColors;
