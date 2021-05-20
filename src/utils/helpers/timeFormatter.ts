export const timeFormatter = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`;
};
