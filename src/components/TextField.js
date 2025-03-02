import React from "react";

const TextField = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your name"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextField;
