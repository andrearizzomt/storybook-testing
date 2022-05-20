import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        btnBgColor="tomato"
        btnTxtColor="white"
        btnHeight="50px"
        btnWidth="200px"
        btnBorderRadius="15px"
        btnBorder="none"
        btnBorderColor="black"
        btnBorderWidth="1px"
        btnTxtlabel="Press Me"
        onClick={() => console.log("You clicked on the Button!")}
      />
    </div>
  );
}

export default App;
