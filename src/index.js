// import react in
import React from "react";
// import reactdom (virtual dom)
import ReactDOM from "react-dom";
// import main component
import LiveSearch from "./components/live-search";
// import main css file
import "./index.css";
// import json seed data
import peaks from "./peaks.json";

// use reactdom to render the main component with character prop thats calling the seed data file, then call where to render the data
ReactDOM.render(
  <LiveSearch characters={peaks} />,
  document.getElementById("root")
);
