import React from "react";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        type="text"
        onChange={(e) => handleInput(e.target.value)}
        value={text}
      />
      <button onClick={() => handleSubmit()}>Добавить</button>
    </label>
  );
};

export default InputField;
