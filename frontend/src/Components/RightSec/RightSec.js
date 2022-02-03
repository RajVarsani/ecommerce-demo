import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";

import styles from "./RightSec.module.css";

import { rightSecData } from "../../Utils/Constants/StaticData";

import { getCustmersData } from "./../../Services/customer.service";
import notify from "./../../Utils/Helpers/notifyToast";

import { MUIStyledTab } from "./helpers/MUIStyledTab";
import { MUIStyledCircularProgress } from "./helpers/MUIStyledCircularProgress";
import CustomerCardComp from './CustomerCardComp/index';

function RightSec() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [customerList, setCustomerList] = React.useState(null);

  useEffect(async () => {
    fetchAndSetCustomerList();
  }, [currentTab]);

  const fetchAndSetCustomerList = async () => {
    setCustomerList(null);
    try {
      const data = await getCustmersData(rightSecData.tabs[currentTab]);
      console.log(data);
      setCustomerList(data);
    } catch (err) {
      notify(err.message, "error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <Tabs
          value={currentTab}
          onChange={(event, newValue) => {
            setCurrentTab(newValue);
          }}
          className={styles.Tabs}
        >
          <MUIStyledTab label={rightSecData.tabs[0]} />
          <MUIStyledTab label={rightSecData.tabs[1]} />
        </Tabs>
      </div>
      {customerList ? (
        <div className={styles.BottomSec}>
          {customerList.map((customer, index) => {
            return (
              <div className={styles.CustomerCard} key={index}>
                <CustomerCardComp customer={customer} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.ProgressBarWrapper}>
          <MUIStyledCircularProgress />
        </div>
      )}
    </div>
  );
}

export default RightSec;
