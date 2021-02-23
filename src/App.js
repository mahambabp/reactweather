import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
