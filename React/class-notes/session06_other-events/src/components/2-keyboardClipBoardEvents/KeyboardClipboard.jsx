import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
    }
    e.keyCode === 13 && setInputValue("");
  };
  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("You cannot copy this doc");
        }}
        className="text-start mt-4"
      >
        {inputValue.toLocaleUpperCase()}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
