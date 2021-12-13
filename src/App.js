import { useState } from "react";
import FoodList from "./Components/FoodList";
import Header from "./UI/Header";
import classes from "./App.module.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [headerArray, setHeaderArray] = useState([]);

  const addItemHandler = (object) => {
    const helperArray = [...headerArray];
    const index = helperArray.findIndex(
      (item) => item.id === object.id && item.variant === object.variant
    );
    if (index > -1) {
      if (helperArray[index].amount + object.amount < 101) {
        helperArray[index].amount += object.amount;
      } else {
        helperArray[index].amount = 100;
      }
    } else {
      helperArray.push(object);
    }
    setHeaderArray(helperArray);
  };

  const removeItemHandler = (id, variant) => {
    const helperObject = headerArray.find(
      (item) => item.id === id && item.variant === variant
    );
    const filteredArray = headerArray.filter((item) => item !== helperObject);
    setHeaderArray(filteredArray);
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#e97c00",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <Header array={headerArray} removeItemHandler={removeItemHandler} />
        <FoodList
          addItemHandler={addItemHandler}
          removeItemHandler={removeItemHandler}
          headerArray={headerArray}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
