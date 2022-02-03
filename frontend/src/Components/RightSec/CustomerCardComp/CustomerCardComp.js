import React from "react";
import { Link } from "react-router-dom";

import styles from "./CustomerCardComp.module.css";

import { rightSecData } from "../../../Utils/Constants/StaticData";

function CustomerCardComp({ customer }) {
  return (
    <div className={styles.Wrapper}>
      <Link to={`/customer/${customer._id}`}>
        <h3 className={styles.Name}>{customer.name}</h3>
        <div className={styles.BottomSec}>
          <div className={styles.KeyValuePair}>
            <span className={styles.Key}>
              {`${rightSecData.keyLables.email}:`}{" "}
            </span>
            <span className={styles.Value}>{customer.email}</span>
          </div>
          <div className={styles.KeyValuePair}>
            <span
              className={styles.Key}
            >{`${rightSecData.keyLables.phone}:`}</span>
            <span className={styles.Value}>{customer.phone}</span>
          </div>
          <div className={styles.KeyValuePair}>
            <span
              className={styles.Key}
            >{`${rightSecData.keyLables.dob}:`}</span>
            <span className={styles.Value}>
              {new Date(customer.dob).toLocaleDateString()}
            </span>
          </div>
          <div className={styles.KeyValuePair}>
            <span
              className={styles.Key}
            >{`${rightSecData.keyLables.address}:`}</span>
            <span className={styles.Value}>{customer.address}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CustomerCardComp;
