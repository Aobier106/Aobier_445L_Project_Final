import React from "react";

const Graphic = ({ count }) => {
  let emoji = "😐"; // Default neutral face
  if (count > 0) emoji = "😃"; // Positive count = happy face
  if (count < 0) emoji = "😞"; // Negative count = sad face

  return (
    <div className="graphic-placeholder">
      <p style={{ fontSize: "50px" }}>{emoji}</p>
      <p>Graphic changes based on count!</p>
    </div>
  );
};

export default Graphic;
