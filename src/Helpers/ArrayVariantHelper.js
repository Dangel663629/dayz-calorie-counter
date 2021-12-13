const ArrayVariantHelper = (array, index) => {
  array.map((item) =>
    item.hasOwnProperty("variants")
      ? (item.energy = item.variants[index].energy)
      : null
  );
  array.map((item) =>
    item.hasOwnProperty("variants")
      ? (item.water = item.variants[index].water)
      : null
  );
  array.map((item) =>
    item.hasOwnProperty("variants")
      ? (item.stomach = item.variants[index].stomach)
      : null
  );
};

export default ArrayVariantHelper;
