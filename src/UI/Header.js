import { useState, useEffect, Fragment } from "react";
import ModalOverlay from "./ModalOverlay";
import classes from "./Header.module.css";
import { useScrollHook } from "../Helpers/useScrollHook";
import HeaderItem from "./HeaderItem";
import HeaderTotal from "./HeaderTotal";
import Button from "@mui/material/Button";
import DayzLogo from "../Resources/images/dayz_logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = (props) => {
  const [totalVisibility, setTotalVisibility] = useState(false);
  const [buttonBump, setButtonBump] = useState(false);

  const btnClasses = `${classes.headerButton} ${
    buttonBump ? classes.bump : ""
  }`;

  useScrollHook(totalVisibility);

  const showTotal = () => {
    setTotalVisibility(true);
  };

  const hideTotal = () => {
    setTotalVisibility(false);
  };

  const buttonAmount = props.array.reduce((acc, item) => acc + item.amount, 0);

  useEffect(() => {
    setButtonBump(true);
    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [buttonAmount]);

  return (
    <div className={classes.header}>
      <img src={DayzLogo} alt="DayZ logo" />
      <Button onClick={showTotal} variant="outlined" className={btnClasses}>
        <ShoppingCartIcon /> <h2>{buttonAmount}</h2>
      </Button>
      {totalVisibility && (
        <ModalOverlay onClick={hideTotal}>
          {props.array.length ? (
            <Fragment>
              <HeaderTotal array={props.array} />
              <ul>
                {props.array.map((item) => (
                  <li>
                    <HeaderItem
                      item={item}
                      removeItemHandler={props.removeItemHandler}
                    />
                  </li>
                ))}
              </ul>
            </Fragment>
          ) : (
            <div className={classes.emptyList}>
              <h1>Add items to get started.</h1>
              <Button
                variant="contained"
                onClick={hideTotal}
                sx={{ textTransform: "none" }}
              >
                Back to list
              </Button>
            </div>
          )}
        </ModalOverlay>
      )}
    </div>
  );
};

export default Header;
