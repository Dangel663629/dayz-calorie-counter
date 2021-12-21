import classes from "./HeaderTotal.module.css";
import ItemStatsHelper from "../Helpers/ItemStatsHelper";
import HeaderMetabolismTime from "../Helpers/HeaderMetabolismTime";

const HeaderTotal = (props) => {
  const totalCalories = props.array.reduce(
    (acc, item) => acc + item.energy * item.amount,
    0
  );

  const totalWater = props.array.reduce(
    (acc, item) => acc + item.water * item.amount,
    0
  );

  const totalStomach = props.array.reduce(
    (acc, item) => acc + item.stomach * item.amount,
    0
  );

  const totalWeight = props.array.reduce(
    (acc, item) => acc + item.weight * item.amount,
    0
  );

  const totalSize = props.array.reduce(
    (acc, item) => acc + item.size * item.amount,
    0
  );

  const helperStatsArray = ItemStatsHelper([
    totalCalories,
    totalWater,
    totalWeight,
    totalSize,
  ]);

  const calPercent = Math.round((totalCalories / 7500) * 100);
  const waterPercent = Math.round((totalWater / 5000) * 100);

  const idleSeconds = Math.round(totalWater / 0.02);
  let idleFunction = HeaderMetabolismTime(idleSeconds);

  const walkSeconds = Math.round(totalWater / 0.08);
  let walkFunction = HeaderMetabolismTime(walkSeconds);

  const jogSeconds = Math.round(totalWater / 0.3);
  let jogFunction = HeaderMetabolismTime(jogSeconds);

  const sprintSeconds = Math.round(totalWater / 0.5);
  let sprintFunction = HeaderMetabolismTime(sprintSeconds);

  return (
    <div className={classes.total}>
      <h2>Total content: </h2>
      <div className={classes.detailsWrapper}>
        <div className={classes.details1}>
          <p>Calories:</p>
          <p> {totalCalories.toLocaleString()} kcal</p>
          <p>Water: </p>
          <p>{totalWater.toLocaleString()} mL</p>
          <p>Stomach:</p>
          <p> {totalStomach.toLocaleString()} mL</p>
          <p>Weight: </p>
          <p>{totalWeight.toLocaleString()} g</p>
          <p>Size:</p>
          <p> {totalSize.toLocaleString()} slots</p>
        </div>
        <div className={classes.details2}>
          <p>Calorie/Weight:</p>
          <p> {helperStatsArray[0]} kcal/g</p>
          <p>Calorie/Slot:</p>
          <p> {helperStatsArray[1]} kcal/slot</p>
          <p>Water/Weight:</p>
          <p> {helperStatsArray[2]} mL/g</p>
          <p>Water/Weight:</p>
          <p> {helperStatsArray[3]} mL/slot</p>
          <p>Weight/Slot:</p>
          <p> {helperStatsArray[4]} g/slot</p>
        </div>
      </div>
      <h2>Stomach statistics:</h2>
      <div className={classes.stomachDetails}>
        <p>Calories:</p>
        <p>{totalCalories.toLocaleString()} / 7,500 kcal</p>
        <p>or</p>
        <p>~ {calPercent}%</p>
        <p>Water: </p>
        <p>{totalWater.toLocaleString()} / 5,000 mL</p>
        <p>or</p>
        <p>~ {waterPercent}%</p>
      </div>
      <h2>Metabolism statistics:</h2>
      <div className={classes.metabolismDetails}>
        <p>
          <span>Idle for:</span>
        </p>
        <p>{idleFunction}</p>
        <p>
          <span>Walk for:</span>
        </p>
        <p>{walkFunction}</p>
        <p>
          <span>Jog for:</span>
        </p>
        <p>{jogFunction}</p>
        <p>
          <span>Sprint for:</span>
        </p>
        <p>{sprintFunction}</p>
      </div>
    </div>
  );
};

export default HeaderTotal;
