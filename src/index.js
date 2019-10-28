import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Demo } from "@toolmaker/auth-component";
function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
