import ArrayVariantHelper from "./ArrayVariantHelper";

const ArrayVariantFunction = (array, variant) => {
  let arrayCopy = JSON.parse(JSON.stringify(array));
  switch (variant) {
    case "none":
    default:
      break;
    case "Rotten":
      ArrayVariantHelper(arrayCopy, 0);
      break;
    case "Baked":
      ArrayVariantHelper(arrayCopy, 1);
      break;
    case "Boiled":
      ArrayVariantHelper(arrayCopy, 2);
      break;
    case "Dried":
      ArrayVariantHelper(arrayCopy, 3);
      break;
    case "Burned":
      ArrayVariantHelper(arrayCopy, 4);
      break;
  }
  return arrayCopy;
};

export default ArrayVariantFunction;
