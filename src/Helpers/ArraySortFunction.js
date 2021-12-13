const ArraySortFunction = (array, sort) => {
  let arrayCopy = JSON.parse(JSON.stringify(array));
  switch (sort) {
    default:
    case 0:
      break;
    case 1:
      return arrayCopy.slice().sort((a, b) => a.energy - b.energy);
    case 2:
      return arrayCopy.slice().sort((a, b) => b.energy - a.energy);
    case 3:
      return arrayCopy
        .slice()
        .sort((a, b) => +a.energy / +a.weight - +b.energy / +b.weight);
    case 4:
      return arrayCopy
        .slice()
        .sort((a, b) => +b.energy / +b.weight - +a.energy / +a.weight);
    case 5:
      return arrayCopy
        .slice()
        .sort((a, b) => +a.energy / +a.size - +b.energy / +b.size);
    case 6:
      return arrayCopy
        .slice()
        .sort((a, b) => +b.energy / +b.size - +a.energy / +a.size);
    case 7:
      return arrayCopy.slice().sort((a, b) => a.water - b.water);
    case 8:
      return arrayCopy.slice().sort((a, b) => b.water - a.water);
    case 9:
      return arrayCopy
        .slice()
        .sort((a, b) => +a.water / +a.weight - +b.water / +b.weight);
    case 10:
      return arrayCopy
        .slice()
        .sort((a, b) => +b.water / +b.weight - +a.water / +a.weight);
    case 11:
      return arrayCopy
        .slice()
        .sort((a, b) => +a.water / +a.size - +b.water / +b.size);
    case 12:
      return arrayCopy
        .slice()
        .sort((a, b) => +b.water / +b.size - +a.water / +a.size);
    case 13:
      return arrayCopy.slice().sort((a, b) => a.stomach - b.stomach);
    case 14:
      return arrayCopy.slice().sort((a, b) => b.stomach - a.stomach);
    case 15:
      return arrayCopy.slice().sort((a, b) => a.size - b.size);
    case 16:
      return arrayCopy.slice().sort((a, b) => b.size - a.size);
    case 17:
      return arrayCopy.slice().sort((a, b) => a.weight - b.weight);
    case 18:
      return arrayCopy.slice().sort((a, b) => b.weight - a.weight);
  }
  return arrayCopy;
};

export default ArraySortFunction;
