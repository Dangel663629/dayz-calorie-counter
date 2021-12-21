const HeaderMetabolismTime = (seconds) => {
  let hours = 0;
  let minutes = 0;
  let secondsCopy = seconds;

  if (secondsCopy >= 3600) {
    hours = Math.floor(secondsCopy / 3600);
    secondsCopy -= hours * 3600;
  }
  if (secondsCopy >= 60) {
    minutes = Math.floor(secondsCopy / 60);
    secondsCopy -= minutes * 60;
    if (minutes < 10 && hours > 0) minutes = "0" + minutes;
  }
  if (secondsCopy < 10 && minutes > 0) secondsCopy = "0" + secondsCopy;

  if (minutes === 0) minutes = "00";
  if (secondsCopy === 0) secondsCopy = "00";

  if (hours === 0) {
    if (minutes === 0 || minutes === "00") {
      if (seconds === 0 || seconds === "00") {
        return "Food has no water nutrients.";
      }
      return "🕑 " + secondsCopy + "seconds";
    }
    return "🕑 " + minutes + ":" + secondsCopy;
  } else return "🕑 " + hours + ":" + minutes + ":" + secondsCopy;
};

export default HeaderMetabolismTime;
