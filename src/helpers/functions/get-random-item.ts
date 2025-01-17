export const getRandomItem = (array: number[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
