import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./AddField.module.css";

import { addFieldComponentData } from "../../Utils/Constants/StaticData";

import notify from "../../Utils/Helpers/notifyToast";

import { StyledMUIInput } from "../../Utils/Helpers/styledMUIInput";
import { addField } from "../../Services/field.service";

function AddField() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToUpload = {};
    for (let index = 0; index < e.target.elements.length - 1; index++) {
      const element = e.target.elements;
      dataToUpload[element[index].name] = element[index].value;
    }
    try {
      await addField(dataToUpload);
      e.target.reset();
      navigate("/");
    } catch (err) {
      if (err.response?.data) {
        if (err.response.data.message) {
          notify(err.response.data.message, "error");
        } else {
          notify(err.response.data, "error");
        }
      } else {
        notify(err.message, "error");
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>{addFieldComponentData.title}</h3>
      <form className={styles.Form} onSubmit={handleSubmit}>
        {addFieldComponentData.fields.map((field, index) => {
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
          {addFieldComponentData.buttons.addField}
        </Button>
      </form>
    </div>
  );
}

export default AddField;
