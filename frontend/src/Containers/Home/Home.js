import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import LeftSec from "./../../Components/LeftSec/index";
import RightSec from "../../Components/RightSec";
import PopUp from "./../../Components/_General/PopUp/index";
import CustomerDetails from "./../../Components/CustomerDetails/index";
import AddCustomer from "./../../Components/AddCustomer/index";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const closePopUp = () => {
    navigate("/");
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <LeftSec />
      </div>
      <div className={styles.RightSec}>
        <RightSec />
      </div>
      <PopUp
        isOpen={location.pathname.split("/")[1] === "customer"}
        ContentComp={<CustomerDetails />}
        isClosable={true}
        closeFun={closePopUp}
        withBorder={false}
      />
      <PopUp
        isOpen={location.pathname.split("/")[1] === "addcustomer"}
        ContentComp={<AddCustomer />}
        isClosable={true}
        closeFun={closePopUp}
        withBorder={false}
      />
    </div>
  );
};

export default Home;
