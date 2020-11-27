import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test="project-name"> Electronics Renting Application </h1>
      <p data-ns-test="project-description">
        {" "}
        An application where you can rent any Electronic gadgets like
        Laptop,Camera,Mobile,Smart devices,etc
      </p>
    </div>
  );
};

export default App;
