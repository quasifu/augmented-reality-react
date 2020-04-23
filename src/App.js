import React, { useState } from "react";
import "./App.css";
import ARPage from "./ARPage";
import LabelsList from "./LabelsList";

function App() {
  const [label, setLabel] = useState();
  return (
    <div className="App">
      {label ? (
        <div>
          <button onClick={(e) => setLabel(undefined)} key={"clearbutton"}>
            Return
          </button>
          <ARPage label={label}></ARPage>
        </div>
      ) : (
        <LabelsList selectLabel={(label) => setLabel(label)}></LabelsList>
      )}
    </div>
  );
}

export default App;
