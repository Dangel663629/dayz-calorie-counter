import { Fragment } from "react";
import ReactDOM from "react-dom";
import React from "react";
import classes from "./ModalOverlay.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Content = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Content>{props.children}</Content>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default ModalOverlay;
