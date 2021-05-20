export const chanceCalculating = (value: number, totalValue: number): number =>
  +((value * 100) / (totalValue > 0 ? totalValue : 1)).toFixed(2);
