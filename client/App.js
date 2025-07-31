import React, { useState } from "react";
import TypeChooser from "./TypeChooser";
import Joke from "./Joke";

function App() {
  const [selectedType, setSelectedType] = useState(null);

  const appContainerStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    padding: "1.5rem 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "@media (max-width: 768px)": {
      padding: "1rem 0.5rem",
    },
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#ffffff",
    "@media (max-width: 768px)": {
      marginBottom: "1.5rem",
    },
  };

  const mainTitleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    margin: "0 0 0.5rem 0",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    background: "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    "@media (max-width: 768px)": {
      fontSize: "2.2rem",
    },
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "300",
    margin: "0",
    opacity: "0.9",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    color: "#cbd5e1",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  };

  const contentContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (max-width: 768px)": {
      gap: "1.5rem",
    },
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={mainTitleStyle}>🎭 Joke Master</h1>
        <p style={subtitleStyle}>Your daily dose of laughter</p>
      </header>

      <div style={contentContainerStyle}>
        {/* Pass selectedType to TypeChooser to highlight the selected type */}
        <TypeChooser
          setSelectedType={setSelectedType}
          selectedType={selectedType}
        />

        {/* Render Joke component and pass down selectedType */}
        <Joke selectedType={selectedType} />
      </div>
    </div>
  );
}

export default App;
