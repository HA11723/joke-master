import React, { useState } from "react";

function TypeChooser({ setSelectedType, selectedType }) {
  const types = ["general", "knock-knock", "programming", "dad"];

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    backdropFilter: "blur(10px)",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#f8fafc",
    textAlign: "center",
    marginBottom: "1.5rem",
    background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: "2.5rem",
    fontWeight: "400",
  };

  const typesContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  };

  const typeCardStyle = (isSelected) => ({
    padding: "1.5rem",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: isSelected
      ? "2px solid #60a5fa"
      : "2px solid rgba(148, 163, 184, 0.3)",
    backgroundColor: isSelected
      ? "rgba(96, 165, 250, 0.15)"
      : "rgba(51, 65, 85, 0.6)",
    boxShadow: isSelected
      ? "0 10px 25px rgba(96, 165, 250, 0.3)"
      : "0 4px 6px rgba(0, 0, 0, 0.2)",
    transform: isSelected ? "translateY(-2px)" : "translateY(0)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
  });

  const typeCardHoverStyle = {
    transform: "translateY(-4px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
    borderColor: "#60a5fa",
    backgroundColor: "rgba(51, 65, 85, 0.8)",
  };

  const typeTextStyle = (isSelected) => ({
    fontSize: "1.1rem",
    fontWeight: isSelected ? "600" : "500",
    color: isSelected ? "#60a5fa" : "#e2e8f0",
    textTransform: "capitalize",
    textAlign: "center",
    margin: "0",
    transition: "color 0.3s ease",
  });

  const typeIconStyle = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    textAlign: "center",
    opacity: "0.9",
  };

  const selectedIndicatorStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    animation: "pulse 2s infinite",
  };

  const pulseAnimation = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;

  const getTypeIcon = (type) => {
    const icons = {
      general: "😄",
      "knock-knock": "🚪",
      programming: "💻",
      dad: "👨‍👧‍👦",
    };
    return icons[type] || "😊";
  };

  const getTypeDescription = (type) => {
    const descriptions = {
      general: "Classic humor for everyone",
      "knock-knock": "Interactive door-knocking fun",
      programming: "Tech jokes for developers",
      dad: "Dad jokes that never get old",
    };
    return descriptions[type] || "Funny jokes";
  };

  return (
    <div style={containerStyle}>
      <style>{pulseAnimation}</style>
      <h1 style={titleStyle}>Joke Type Selector</h1>
      <p style={subtitleStyle}>Choose your preferred style of humor</p>

      <div style={typesContainerStyle}>
        {types.map((type) => {
          const isSelected = selectedType === type;
          return (
            <div
              key={type}
              style={{
                ...typeCardStyle(isSelected),
                ...(isSelected ? {} : {}),
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.target.style.transform = typeCardHoverStyle.transform;
                  e.target.style.boxShadow = typeCardHoverStyle.boxShadow;
                  e.target.style.borderColor = typeCardHoverStyle.borderColor;
                  e.target.style.backgroundColor =
                    typeCardHoverStyle.backgroundColor;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.target.style.transform =
                    typeCardStyle(isSelected).transform;
                  e.target.style.boxShadow =
                    typeCardStyle(isSelected).boxShadow;
                  e.target.style.borderColor = typeCardStyle(isSelected).border;
                  e.target.style.backgroundColor =
                    typeCardStyle(isSelected).backgroundColor;
                }
              }}
              onClick={() => handleTypeClick(type)}
            >
              {isSelected && <div style={selectedIndicatorStyle}></div>}
              <div style={typeIconStyle}>{getTypeIcon(type)}</div>
              <h3 style={typeTextStyle(isSelected)}>{type}</h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: isSelected ? "#94a3b8" : "#64748b",
                  textAlign: "center",
                  margin: "0.5rem 0 0 0",
                  fontStyle: "italic",
                }}
              >
                {getTypeDescription(type)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypeChooser;
