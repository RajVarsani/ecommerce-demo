import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Containers/Home";

const App = () => {
  return (
    <Routes>
      {["/", "customer", "addcustomer", "addfield"].map((path, index) => (
        <Route key={index} path={path} element={<Home />} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
