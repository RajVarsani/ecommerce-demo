import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./CustomerDetails.module.css";

import { customerDetailsComponentData } from "./../../Utils/Constants/StaticData";

import notify from "./../../Utils/Helpers/notifyToast";
import { getCustomerDataById } from "../../Services/customer.service";
import { MUIStyledCircularProgress } from "../RightSec/helpers/MUIStyledCircularProgress";

function CustomerDetails({}) {
  let { id: customerID } = useParams();

  const [customerDetails, setCustomerDetails] = React.useState(null);

  useEffect(() => {
    getAndSetCustomerDetails();
  }, [customerID]);

  const getAndSetCustomerDetails = async () => {
    if (customerID) {
      setCustomerDetails(null);
      try {
        const data = await getCustomerDataById(customerID);
        delete data._id;
        delete data.__v;
        setCustomerDetails(data);
      } catch (err) {
        notify(err.message, "error");
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{customerDetailsComponentData.title}</h2>
      {customerDetails ? (
        <div className={styles.Content}>
          {Object.keys(customerDetails).map((key, index) => {
            return (
              <div key={index} className={styles.Row}>
                <span className={styles.Key}>
                  {customerDetailsComponentData.keyLables[key]
                    ? customerDetailsComponentData.keyLables[key]
                    : key}
                  {":"}
                </span>

                <span className={styles.Value}>{customerDetails[key]}</span>
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

export default CustomerDetails;
