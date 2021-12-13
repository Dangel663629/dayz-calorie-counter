export const useImageSourceHook = (id, variant) => {
  let imageSource = `images/${id}.png`;
  switch (id) {
    //all these id's re-use the same image of meat
    case 602:
    case 605:
    case 606:
    case 607:
    case 610:
    case 611:
    case 612:
      imageSource = "images/601.png";
      if (variant !== "none") imageSource = `images/601_${variant}.png`;
      return imageSource;
    default:
      break;
  }
  if (variant !== "none") imageSource = `images/${id}_${variant}.png`;
  return imageSource;
};
