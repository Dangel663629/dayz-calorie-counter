//making sure item has variant, variant will be used for image

export const useVariantHook = (item, variant) => {
  let trueVariant = "none";
  if (item.hasOwnProperty("variants")) {
    trueVariant = variant;
  } else {
    trueVariant = "none";
  }
  return trueVariant;
};
