import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const popupStates = useSelector((state) => state.popupState);

  useEffect(() => {
    console.log(popupStates);
  }, [popupStates]);

  return <div className={styles.Wrapper}></div>;
};

export default Home;
