export const randomIntArrayInRange = (min: number, max: number, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

export const shuffleNumberArray = (array: number[]) =>
  array.sort(() => Math.random() - 0.5);
