export const calculateType = (integerArray) => {
  //Checks for the distinct values in the array to know how many equal sides it contains.
  const distinctValues = [...new Set(integerArray)];
  if (distinctValues.length === 1) return "Equilateral";
  if (distinctValues.length === 2) return "Isosceles";
  if (distinctValues.length === 3) return "Scalene";
};

export const getCoordinates = (
  values,
  setType,
  coordinates,
  setCoordinates,
  setIsTooSmall
) => {
  const { side1, side2, side3 } = values;

  const integerArray = [side1, side2, side3].map(Number);
  const sortedArray = integerArray.sort((a, b) => a - b);

  sortedArray[2] - sortedArray[1] >= sortedArray[0]
    ? setIsTooSmall(true)
    : setIsTooSmall(false);

  setType(calculateType(integerArray));
  calculateCoordinates(integerArray, coordinates, setCoordinates);
};

export const calculateCoordinates = (
  integerArray,
  coordinates,
  setCoordinates
) => {
  const side1 = integerArray[0];
  const side2 = integerArray[1];
  const side3 = integerArray[2];

  const { coordinate3 } = coordinates;

  setCoordinates({ ...coordinates, coordinate2: [0, side1] });

  // calculate third point

  coordinate3[1] =
    (side1 * side1 + side3 * side3 - side2 * side2) / (2 * side1);
  coordinate3[0] = Math.sqrt(side3 * side3 - coordinate3[1] * coordinate3[1]);
};
