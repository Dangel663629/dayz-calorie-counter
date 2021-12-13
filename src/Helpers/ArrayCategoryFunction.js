const ArrayCategoryFunction = (array, category) => {
  let arrayCopy = [];
  switch (category) {
    default:
    case "all":
      array.map((category) =>
        category.foods.map((item) => arrayCopy.push(item))
      );
      break;
    case "canned":
      arrayCopy = array[0].foods.map((item) => item);
      break;
    case "dry":
      arrayCopy = array[1].foods.map((item) => item);
      break;
    case "fruits":
      arrayCopy = array[2].foods.map((item) => item);
      break;
    case "vegetables":
      arrayCopy = array[3].foods.map((item) => item);
      break;
    case "mushrooms":
      arrayCopy = array[4].foods.map((item) => item);
      break;
    case "meat":
      arrayCopy = array[5].foods.map((item) => item);
      break;
    case "drinks":
      arrayCopy = array[6].foods.map((item) => item);
      break;
    case "others":
      arrayCopy = array[7].foods.map((item) => item);
      break;
  }
  return arrayCopy;
};

export default ArrayCategoryFunction;
