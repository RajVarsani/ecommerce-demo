import React from "react";
import { Button, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./AddCustomer.module.css";

import { addCustomerComponentData } from "../../Utils/Constants/StaticData";

import { StyledMUIInput } from "./../../Utils/Helpers/styledMUIInput";
import { addCustomer } from "./../../Services/customer.service";
import notify from "./../../Utils/Helpers/notifyToast";
import { UPDATE_CUSTOMER_LIST_TYPE } from "../../Redux/ActionTypes";

function AddCustomer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customersState = useSelector((state) => state.customersState);

  const [acType, setAcType] = React.useState(
    addCustomerComponentData.acTypes[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToUpload = {};
    for (let index = 2; index < e.target.elements.length - 1; index++) {
      const element = e.target.elements;
      dataToUpload[element[index].name] = element[index].value;
    }
    dataToUpload.acType = acType;
    try {
      await addCustomer(dataToUpload);
      const customersListTypeIndex = customersState.listTypeIndex;
      dispatch({
        type: UPDATE_CUSTOMER_LIST_TYPE,
        payload: null,
      });
      dispatch({
        type: UPDATE_CUSTOMER_LIST_TYPE,
        payload: customersListTypeIndex,
      });
      e.target.reset();
      navigate("/");
    } catch (err) {
      notify(err.message, "error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>{addCustomerComponentData.title}</h3>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Select
          value={acType}
          style={{
            fontSize: "var(--locale-font-size)",
            textTransform: "capitalize",
          }}
          onChange={(e) => {
            setAcType(e.target.value);
          }}
        >
          {addCustomerComponentData.acTypes.map((type, index) => {
            return (
              <MenuItem
                key={index}
                value={type}
                style={{
                  fontSize: "var(--locale-font-size-menu-item)",
                  textTransform: "capitalize",
                }}
                className={styles.SelectItem}
              >
                {type}
              </MenuItem>
            );
          })}
        </Select>

        {addCustomerComponentData.fields.map((field, index) => {
          return (
            <StyledMUIInput
              autoComplete="off"
              variant="standard"
              key={index}
              label={field.name}
              type={field.type}
              name={field.name}
              defaultValue={
                field.type === "date"
                  ? new Date().toISOString().substring(0, 10)
                  : ""
              }
              required={true}
            />
          );
        })}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.Button}
        >
          {addCustomerComponentData.buttons.addCustomer}
        </Button>
      </form>
    </div>
  );
}

export default AddCustomer;
