import { useState, useEffect } from "react";
import { useScrollHook } from "../Helpers/useScrollHook";
import { useVariantHook } from "../Helpers/useVariantHook";
import { useImageSourceHook } from "../Helpers/useImageSourceHook";
import FoodItemDetailed from "./FoodItemDetailed";
import classes from "./FoodItem.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircle from "@mui/icons-material/AddCircle";

const FoodItem = (props) => {
  const [amount, setAmount] = useState(1);
  const [detailedVisibility, setDetailedVisibility] = useState(false);
  const [removeItemVisibility, setRemoveItemVisibility] = useState(false);
  const [removeButtonAmount, setRemoveButtonAmount] = useState(0);

  useScrollHook(detailedVisibility);

  const trueVariant = useVariantHook(props.item, props.variant);
  const imageSource = useImageSourceHook(props.item.food_id, trueVariant, true);
  const textVariant = trueVariant === "none" ? "" : `${trueVariant} `;

  const addItemHandler = () => {
    let foodItemObject = {
      amount,
      variant: trueVariant,
      id: props.item.food_id,
      name: props.item.food_name,
      energy: props.item.energy,
      water: props.item.water,
      stomach: props.item.stomach,
      size: props.item.size,
      weight: props.item.weight,
      imageSource,
      textVariant,
    };
    props.addItemHandler(foodItemObject);
  };

  const removeItemHandler = () => {
    props.removeItemHandler(props.item.food_id, trueVariant);
  };

  const amountChangeHandler = (event) => {
    if (+event.target.value > 0 && +event.target.value < 1000) {
      setAmount(+event.target.value);
    }
  };

  const amountBlurHandler = () => {
    if (amount < 0) {
      setAmount(1);
    } else if (amount > 100) {
      setAmount(100);
    } else if (amount === "") {
      setAmount(1);
    }
  };

  const amountFocusHandler = () => {
    setAmount("");
  };

  const showDetailedHandler = () => {
    setDetailedVisibility(true);
  };

  const hideDetailedHandler = () => {
    setDetailedVisibility(false);
  };

  useEffect(() => {
    setAmount(1);
  }, [props.sort, props.category]);

  useEffect(() => {
    const helperObject = props.headerArray.find(
      (item) => item.id === props.item.food_id && item.variant === trueVariant
    );
    if (helperObject !== undefined) {
      setRemoveItemVisibility(true);
      setRemoveButtonAmount(helperObject.amount);
    } else {
      setRemoveItemVisibility(false);
      setRemoveButtonAmount(0);
    }
  }, [props.headerArray, trueVariant, props.item.food_id]);

  return (
    <li className={classes.foodItem}>
      <div className={classes.titleWrapper} onClick={showDetailedHandler}>
        <h3>
          {textVariant} {props.item.food_name}
        </h3>
      </div>
      <div className={classes.imageWrapper}>
        <img
          src={imageSource}
          alt={textVariant + props.item.food_name}
          onClick={showDetailedHandler}
        />
        <div className={classes.details}>
          <p>🍴 {props.item.energy} kcal</p>
          <p>💧 {props.item.water} mL</p>
          <p>
            {props.item.size}
            {props.item.size === 1 ? " slot" : " slots"}
          </p>
          <p>{props.item.weight} g</p>
        </div>
      </div>
      <div className={classes.inputWrapper}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          value={amount}
          onChange={amountChangeHandler}
          onBlur={amountBlurHandler}
          onFocus={amountFocusHandler}
          sx={{ marginRight: "2px", width: "40%" }}
        />
        <Button
          onClick={addItemHandler}
          variant="contained"
          sx={{ marginLeft: "2px", width: "60%", textTransform: "none" }}
        >
          <AddCircle sx={{ width: 18, marginRight: 0.2 }} />
          Add
        </Button>
      </div>
      <div className={classes.removeButtonWrapper}>
        {removeItemVisibility ? (
          <Button
            onClick={removeItemHandler}
            variant="contained"
            color="secondary"
            sx={{
              margin: "3px 0px 5px 0px",
              height: 26,
              width: "65%",
              textTransform: "none",
              padding: 0,
            }}
          >
            <DeleteIcon sx={{ width: 20, marginRight: 0.4 }} /> Remove (
            <h4>{removeButtonAmount}</h4>)
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              margin: "3px 0px 5px 0px",
              height: 26,
              width: "65%",
              textTransform: "none",
            }}
            disabled
          >
            <DeleteIcon sx={{ width: 20 }} />
            Remove
          </Button>
        )}
      </div>
      {detailedVisibility && (
        <FoodItemDetailed
          hideDetailedHandler={hideDetailedHandler}
          item={props.item}
          variant={props.variant}
        />
      )}
    </li>
  );
};

export default FoodItem;
