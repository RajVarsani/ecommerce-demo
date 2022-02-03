import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LeftSec.module.css";

import { leftSecData } from "./../../Utils/Constants/StaticData";

import { Button } from "@mui/material";
function LeftSec() {
  const navigate = useNavigate();

  return (
    <div className={styles.Wrapper}>
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
  );
}

export default LeftSec;
