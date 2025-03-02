import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import TextField from "./components/TextField";
import Graphic from "./components/Graphic";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Handle button clicks
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  // Handle text input change with validation & sanitization
  const handleInputChange = (e) => {
    const input = e.target.value;

    // Sanitize Input (Allow only letters & spaces)
    const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, "");

    // Validate Input Length (Max 20 characters)
    if (sanitizedInput.length > 20) {
      setError("Name cannot exceed 20 characters.");
    } else {
      setError("");
    }

    setUsername(sanitizedInput);
  };

  return (
    <div className="container">
      <h1>Interactive React Dashboard</h1>

      {/* User Input Section */}
      <h2>Welcome, {username || "Guest"}!</h2>
      <TextField value={username} onChange={handleInputChange} error={error} />

      {/* Counter Section */}
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <Button label="Increment" onClick={handleIncrement} />
        <Button label="Decrement" onClick={handleDecrement} />
        <Button label="Reset" onClick={handleReset} />
      </div>

      {/* Graphic Section */}
      <h2>Graphic Indicator</h2>
      <Graphic count={count} />
    </div>
  );
}

export default App;
