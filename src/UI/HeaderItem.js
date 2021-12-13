import classes from "./HeaderItem.module.css";
import Button from "@mui/material/Button";
import DeleteForever from "@mui/icons-material/DeleteForever";

const HeaderItem = (props) => {
  const removeItemHandler = () => {
    props.removeItemHandler(props.item.id, props.item.variant);
  };

  return (
    <div className={classes.item}>
      <img
        src={props.item.imageSource}
        alt={props.item.textVariant + props.item.name}
        className={classes.itemImage}
      />
      <p className={classes.amount}>× {props.item.amount}</p>
      <p className={classes.itemName}>
        {props.item.textVariant}
        {props.item.name}
      </p>
      <div className={classes.details}>
        <p>Energy: {props.item.energy} kcal</p>
        <p>Water: {props.item.water} mL</p>
        <p>Stomach: {props.item.stomach} mL</p>
      </div>
      <Button
        variant="contained"
        onClick={removeItemHandler}
        className={classes.removeButton}
      >
        <DeleteForever />
      </Button>
    </div>
  );
};

export default HeaderItem;

// const helperObject = props.headerArray.find(
//   (item) => item.id === props.item.food_id && item.variant === trueVariant
// );
// if (helperObject !== undefined) {
//   setRemoveItemVisibility(true);
//   setRemoveButtonAmount(helperObject.amount);
// } else {
//   setRemoveItemVisibility(false);
//   setRemoveButtonAmount(0);
// }
