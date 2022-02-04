import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import { useDispatch, useSelector } from "react-redux";

import styles from "./RightSec.module.css";

import { rightSecData } from "../../Utils/Constants/StaticData";
import {
  UPDATE_CUSTOMER_LIST_TYPE,
  UPDATE_CUSTOMER_LIST,
} from "../../Redux/ActionTypes";

import { getCustmersData } from "./../../Services/customer.service";
import notify from "./../../Utils/Helpers/notifyToast";

import { MUIStyledTab } from "./helpers/MUIStyledTab";
import { MUIStyledCircularProgress } from "./helpers/MUIStyledCircularProgress";
import CustomerCardComp from "./CustomerCardComp/index";

function RightSec() {
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customersState);

  useEffect(async () => {
    fetchAndSetCustomerList();
  }, [customersState.listTypeIndex]);

  const fetchAndSetCustomerList = async () => {
    if (customersState.listTypeIndex !== null) {
      dispatch({
        type: UPDATE_CUSTOMER_LIST,
        payload: null,
      });
      try {
        const data = await getCustmersData(
          rightSecData.tabs[customersState.listTypeIndex]
        );
        console.log(data);
        dispatch({
          type: UPDATE_CUSTOMER_LIST,
          payload: data,
        });
      } catch (err) {
        notify(err.message, "error");
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <Tabs
          value={customersState.listTypeIndex}
          onChange={(event, newValue) => {
            dispatch({
              type: UPDATE_CUSTOMER_LIST_TYPE,
              payload: newValue,
            });
          }}
          className={styles.Tabs}
        >
          <MUIStyledTab label={rightSecData.tabs[0]} />
          <MUIStyledTab label={rightSecData.tabs[1]} />
        </Tabs>
      </div>
      {customersState.list ? (
        <div className={styles.BottomSec}>
          {customersState.list.map((customer, index) => {
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
