import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Containers/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
      <Routes>
        {["/", "customer/:id", "addcustomer", "addfield"].map((path, index) => (
          <Route key={index} path={path} element={<Home />} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
