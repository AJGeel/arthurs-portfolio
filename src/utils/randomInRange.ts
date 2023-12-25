export const randomInRange = (
  min: number,
  max: number,
  currentNumber?: number
) => {
  let random;
  do {
    random = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (random === currentNumber);

  return random;
};
