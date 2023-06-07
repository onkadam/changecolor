import React, { useState } from "react";

function ColorChangeButton() {
  const [buttonColor, setButtonColor] = useState("yellow");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "changecolor") {
      setButtonColor("green");
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        Click
      </button>
    </div>
  );
}

export default ColorChangeButton;
