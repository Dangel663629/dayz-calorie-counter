import { useImageSourceHook } from "../Helpers/useImageSourceHook";
import { useVariantHook } from "../Helpers/useVariantHook";
import ModalOverlay from "../UI/ModalOverlay";
import classes from "./FoodItemDetailed.module.css";
import ItemStatsHelper from "../Helpers/ItemStatsHelper";

const FoodItemDetailed = (props) => {
  const visibilityChangeHandler = () => {
    props.hideDetailedHandler();
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
          <img
            className={classes.image}
            src={imageSource}
            alt={textVariant + props.item.food_name}
            loading="lazy"
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
