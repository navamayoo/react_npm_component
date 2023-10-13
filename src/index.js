import React from "react";
import Button from "@mui/material/Button";

export default function index_component() {
  const handleSecondary = () => {
    alert("You are click Secondary Button");
  };
  const handleSuccess = () => {
    alert("You are click Success Button");
  };
  const handleError = () => {
    alert("You are click Error Button");
  };

  return (
    <div>
      <h1>This is a NPM REACT COMPONENT</h1>
      <Button color="secondary" onClick={handleSecondary}>
        Secondary
      </Button>
      <Button variant="contained" color="success" onClick={handleSuccess}>
        Success
      </Button>
      <Button variant="outlined" color="error" onClick={handleError}>
        Error
      </Button>
    </div>
  );
}
