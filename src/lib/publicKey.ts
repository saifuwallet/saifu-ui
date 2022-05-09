export const short = (str: string, chars = 4) => {
  return `${str.slice(0, chars)}...${str.slice(-chars)}`;
};
