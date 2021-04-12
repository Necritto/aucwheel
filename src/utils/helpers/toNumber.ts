export const toNumber = (value: string): number => {
  const toNumberValue = parseFloat(value.trim());
  return isNaN(toNumberValue) ? 0 : toNumberValue;
};
