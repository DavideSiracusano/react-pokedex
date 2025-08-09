import React from "react";
import { useState, useEffect } from "react";

const ChangeColor = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.className = theme ? "light" : "dark";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="theme-toggle-container d-flex justify-content-center align-items-center">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ChangeColor;
