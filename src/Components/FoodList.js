import { useEffect, useState } from "react";
import FoodArray from "../Helpers/FoodArray";
import FoodItem from "./FoodItem";
import classes from "./FoodList.module.css";
import ArrayCategoryFunction from "../Helpers/ArrayCategoryFunction";
import ArrayVariantFunction from "../Helpers/ArrayVariantFunction";
import ArraySearchFunction from "../Helpers/ArraySearchFunction";
import ArraySortFunction from "../Helpers/ArraySortFunction";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

const FoodList = (props) => {
  const [category, setCategory] = useState("all");
  const [variant, setVariant] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(0);
  const [categoryFormattedArray, setCategoryFormattedArray] = useState([]);
  const [variantFormattedArray, setVariantFormattedArray] = useState([]);
  const [searchFormattedArray, setSearchFormattedArray] = useState([]);
  const [sortFormattedArray, setSortFormattedArray] = useState([]);

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const variantChangeHandler = (event) => {
    setVariant(event.target.value);
  };

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortChangeHandler = (event) => {
    setSort(+event.target.value);
  };

  useEffect(() => {
    setCategoryFormattedArray(ArrayCategoryFunction(FoodArray, category));
    setVariant("none");
    setSearchTerm("");
    setSort(0);
  }, [category]);

  useEffect(() => {
    setVariantFormattedArray(
      ArrayVariantFunction(categoryFormattedArray, variant)
    );
  }, [variant, categoryFormattedArray]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSearchFormattedArray(
        ArraySearchFunction(variantFormattedArray, searchTerm)
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, variantFormattedArray]);

  useEffect(() => {
    setSortFormattedArray(ArraySortFunction(searchFormattedArray, sort));
  }, [sort, searchFormattedArray]);

  return (
    <div className={classes.main}>
      <div className={classes.filterWrapper}>
        <Select
          value={category}
          onChange={categoryChangeHandler}
          className={classes.select}
        >
          <MenuItem value={"all"}>All categories</MenuItem>
          <MenuItem value={"canned"}>Canned Goods</MenuItem>
          <MenuItem value={"dry"}>Dry Goods</MenuItem>
          <MenuItem value={"fruits"}>Fruits</MenuItem>
          <MenuItem value={"vegetables"}>Vegetables</MenuItem>
          <MenuItem value={"mushrooms"}>Mushrooms</MenuItem>
          <MenuItem value={"meat"}>Meat</MenuItem>
          <MenuItem value={"drinks"}>Drinks</MenuItem>
          <MenuItem value={"others"}>Others</MenuItem>
        </Select>
        {category !== "canned" && category !== "dry" && category !== "drinks" && (
          <Select
            value={variant}
            onChange={variantChangeHandler}
            className={classes.select}
          >
            <MenuItem value={"none"}>No variant</MenuItem>
            <MenuItem value={"Baked"}>Baked</MenuItem>
            <MenuItem value={"Dried"}>Dried</MenuItem>
            <MenuItem value={"Boiled"}>Boiled</MenuItem>
            <MenuItem value={"Burned"}>Burned</MenuItem>
            <MenuItem value={"Rotten"}>Rotten</MenuItem>
          </Select>
        )}
        <TextField
          type="text"
          value={searchTerm}
          onChange={searchTermChangeHandler}
          size="small"
          placeholder="Search for food..."
          sx={{ margin: ".5rem .5rem 0rem 0rem" }}
        />
        <Select
          value={sort}
          onChange={sortChangeHandler}
          className={classes.select}
        >
          <MenuItem value={0}>Default</MenuItem>
          <MenuItem value={1}>Calories: Lowest</MenuItem>
          <MenuItem value={2}>Calories: Highest</MenuItem>
          <MenuItem value={3}>Calories/Weight: Lowest</MenuItem>
          <MenuItem value={4}>Calories/Weight: Highest</MenuItem>
          <MenuItem value={5}>Calories/Slot: Lowest</MenuItem>
          <MenuItem value={6}>Calories/Slot: Highest</MenuItem>
          <MenuItem value={7}>Water: Lowest</MenuItem>
          <MenuItem value={8}>Water: Highest</MenuItem>
          <MenuItem value={9}>Water/Weight: Lowest</MenuItem>
          <MenuItem value={10}>Water/Weight: Highest</MenuItem>
          <MenuItem value={11}>Water/Slot: Lowest</MenuItem>
          <MenuItem value={12}>Water/Slot: Highest</MenuItem>
          <MenuItem value={13}>Stomach: Lowest</MenuItem>
          <MenuItem value={14}>Stomach: Highest</MenuItem>
          <MenuItem value={15}>Size: Smallest</MenuItem>
          <MenuItem value={16}>Size: Largest</MenuItem>
          <MenuItem value={17}>Weight: Lightest</MenuItem>
          <MenuItem value={18}>Weight: Heaviest</MenuItem>
        </Select>
      </div>
      <div className={classes.list}>
        <ul>
          {sortFormattedArray.length === 0 ? (
            <h2>No results found.</h2>
          ) : (
            sortFormattedArray.map((item) => (
              <FoodItem
                key={item.food_id}
                item={item}
                addItemHandler={props.addItemHandler}
                variant={variant}
                category={category}
                sort={sort}
                headerArray={props.headerArray}
                removeItemHandler={props.removeItemHandler}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
