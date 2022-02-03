import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Home.module.css";
import LeftSec from "./../../Components/LeftSec/index";
import RightSec from "../../Components/RightSec";

const Home = () => {
  const dispatch = useDispatch();
  const popupStates = useSelector((state) => state.popupState);

  useEffect(() => {
    console.log(popupStates);
  }, [popupStates]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <LeftSec />
      </div>
      <div className={styles.RightSec}>
        <RightSec />
      </div>
    </div>
  );
};

export default Home;
