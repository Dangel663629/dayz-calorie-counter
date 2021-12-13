import SearchTermsHelperArray from "./SearchTermsHelperArray";

const ArraySearchFunction = (array, term) => {
  let filteredArray = JSON.parse(JSON.stringify(array));
  let termsArray = [];
  let searchterm = term.trim().toLowerCase();
  if (searchterm.length >= 2) {
    //matches searchword to the closest broad search word in the helper array
    termsArray = SearchTermsHelperArray.filter((element) =>
      element.includes(searchterm)
    );
    //then if broad search words are found, displays results based on the first word in array
    if (termsArray.length > 0) {
      filteredArray = array.filter((element) =>
        element.searchterms.includes(termsArray[0])
      );
    }
    //if it doesn't find broad matches filters items that contain the searchterm string itself
    else {
      filteredArray = array.filter((element) =>
        element.food_name.toLowerCase().includes(searchterm)
      );
    }
  }
  return filteredArray;
};

export default ArraySearchFunction;
