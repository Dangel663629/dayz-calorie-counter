//given an array of energy, water, weight, size - calculates energy/water per weight/size and rounds them down to 2 decimals
const ItemStatsHelper = (array) => {
  const finalArray = [];
  finalArray[0] =
    Math.round((array[0] / array[2] + Number.EPSILON) * 100) / 100;
  finalArray[1] =
    Math.round((array[0] / array[3] + Number.EPSILON) * 100) / 100;
  finalArray[2] =
    Math.round((array[1] / array[2] + Number.EPSILON) * 100) / 100;
  finalArray[3] =
    Math.round((array[1] / array[3] + Number.EPSILON) * 100) / 100;
  finalArray[4] =
    Math.round((array[2] / array[3] + Number.EPSILON) * 100) / 100;
  return finalArray;
};

export default ItemStatsHelper;
