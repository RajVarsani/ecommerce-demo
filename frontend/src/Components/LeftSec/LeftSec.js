import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import styles from "./LeftSec.module.css";

import { leftSecData } from "./../../Utils/Constants/StaticData";

function LeftSec() {
  const navigate = useNavigate();

  return (
    <div className={styles.Wrapper}>
      <Link to={"/"} className={styles.TopSec}>
        <h1 className={styles.Title}>
          <span>{leftSecData.title[0]}</span>
          <span>{leftSecData.title[1]}</span>
        </h1>
      </Link>
      <div className={styles.BottomSec}>
        <Button
          variant="contained"
          className={styles.Button}
          onClick={() => {
            navigate("/addcustomer");
          }}
        >
          {leftSecData.buttons.addCustomer}
        </Button>
        <Button
          variant="outlined"
          className={styles.Button}
          onClick={() => {
            navigate("/addfield");
          }}
        >
          {leftSecData.buttons.addField}
        </Button>
      </div>
    </div>
  );
}

export default LeftSec;
