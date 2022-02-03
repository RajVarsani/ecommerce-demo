import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Containers/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
