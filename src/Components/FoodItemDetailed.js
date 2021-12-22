import { useImageSourceHook } from "../Helpers/useImageSourceHook";
import { useVariantHook } from "../Helpers/useVariantHook";
import ModalOverlay from "../UI/ModalOverlay";
import classes from "./FoodItemDetailed.module.css";
import ItemStatsHelper from "../Helpers/ItemStatsHelper";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

const FoodItemDetailed = (props) => {
  const [imageLoading, setImageLoading] = useState(true);

  const changeImageLoadingHandler = () => {
    console.log("I have loaded");
    setImageLoading(false);
  };

  const visibilityChangeHandler = () => {
    props.hideDetailedHandler();
    setImageLoading(true);
  };

  const trueVariant = useVariantHook(props.item, props.variant);
  const imageSource = useImageSourceHook(
    props.item.food_id,
    trueVariant,
    false
  );
  const textVariant = trueVariant === "none" ? "" : `${trueVariant} `;

  const helperStatsArray = ItemStatsHelper([
    props.item.energy,
    props.item.water,
    props.item.weight,
    props.item.size,
  ]);

  return (
    <ModalOverlay onClick={visibilityChangeHandler}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <div
            className={classes.spinnerWrapper}
            style={{ display: imageLoading ? "block" : "none" }}
          >
            <div className={classes.spinner}>
              <FadeLoader speedMultiplier={1.25} />
            </div>
          </div>
          <img
            className={classes.image}
            src={imageSource}
            alt={textVariant + props.item.food_name}
            onLoad={changeImageLoadingHandler}
            style={{ display: imageLoading ? "none" : "block" }}
          />
        </div>
        <div className={classes.stats}>
          <p>Food ID:</p>
          <p>{props.item.food_id}</p>
          <p>Food Name:</p>
          <p>{props.item.food_name}</p>
          <p>Variant:</p>
          <p> {trueVariant}</p>
          <p>Energy: </p>
          <p>{props.item.energy} kcal</p>
          <p>Calorie/Weight: </p>
          <p>{helperStatsArray[0]} kcal/g</p>
          <p>Calorie/Slot: </p>
          <p>{helperStatsArray[1]} kcal/slot</p>
          <p>Water: </p>
          <p>{props.item.water} mL</p>
          <p>Water/Weight:</p>
          <p>{helperStatsArray[2]} mL/g</p>
          <p>Water/Slot: </p>
          <p>{helperStatsArray[3]} mL/slot</p>
          <p>Stomach: </p>
          <p>{props.item.stomach} mL</p>
          <p>Size (slots): </p>
          <p>{props.item.size}</p>
          <p>Weight: </p>
          <p>{props.item.weight} g</p>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default FoodItemDetailed;
