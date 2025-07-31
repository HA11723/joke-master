import React, { useEffect, useState } from "react";

function Joke({ selectedType }) {
  // store the joke data
  const [joke, setJoke] = useState(null);
  // store to handle loading state
  const [loading, setLoading] = useState(false);

  //Task 4 to get another joke using a button
  const [showButton, setShowButton] = useState(false);

  const fetchJoke = () => {
    if (!selectedType) return;

    setLoading(true);
    fetch(`https://official-joke-api.appspot.com/jokes/${selectedType}/random`)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (selectedType) {
      fetchJoke();
      setShowButton(true);
    }
  }, [selectedType]);

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
    fontSize: "2rem",
    fontWeight: "600",
    color: "#f8fafc",
    textAlign: "center",
    marginBottom: "2rem",
    background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const loadingStyle = {
    textAlign: "center",
    padding: "3rem",
    fontSize: "1.2rem",
    color: "#94a3b8",
    fontWeight: "500",
  };

  const jokeContainerStyle = {
    backgroundColor: "rgba(51, 65, 85, 0.6)",
    borderRadius: "12px",
    padding: "2rem",
    marginBottom: "2rem",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    position: "relative",
    backdropFilter: "blur(10px)",
  };

  const setupStyle = {
    fontSize: "1.3rem",
    color: "#e2e8f0",
    fontWeight: "500",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
    textAlign: "center",
    fontStyle: "italic",
  };

  const punchlineStyle = {
    fontSize: "1.5rem",
    color: "#60a5fa",
    fontWeight: "700",
    textAlign: "center",
    margin: "0",
    lineHeight: "1.4",
    padding: "1rem",
    backgroundColor: "rgba(96, 165, 250, 0.15)",
    borderRadius: "8px",
    border: "2px solid rgba(96, 165, 250, 0.3)",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
    color: "#ffffff",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 6px rgba(96, 165, 250, 0.3)",
    display: "block",
    margin: "0 auto",
    minWidth: "200px",
  };

  const buttonHoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 15px rgba(96, 165, 250, 0.5)",
  };

  const placeholderStyle = {
    textAlign: "center",
    padding: "3rem",
    fontSize: "1.2rem",
    color: "#94a3b8",
    fontStyle: "italic",
    backgroundColor: "rgba(51, 65, 85, 0.4)",
    borderRadius: "12px",
    border: "2px dashed rgba(148, 163, 184, 0.4)",
  };

  const typeBadgeStyle = {
    display: "inline-block",
    backgroundColor: "#60a5fa",
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    textTransform: "capitalize",
    marginBottom: "1rem",
  };

  const spinnerStyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    border: "3px solid rgba(148, 163, 184, 0.3)",
    borderTop: "3px solid #60a5fa",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginRight: "0.5rem",
  };

  const spinAnimation = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{spinAnimation}</style>
      <h2 style={titleStyle}>🎪 Your Joke</h2>

      {loading ? (
        <div style={loadingStyle}>
          <div style={spinnerStyle}></div>
          Loading your joke...
        </div>
      ) : joke ? (
        <div style={jokeContainerStyle}>
          <div style={typeBadgeStyle}>{selectedType} Joke</div>
          <p style={setupStyle}>"{joke.setup}"</p>
          <p style={punchlineStyle}>"{joke.punchline}"</p>
        </div>
      ) : (
        <div style={placeholderStyle}>
          ✨ Select a joke type above to get started!
        </div>
      )}

      {showButton && !loading && (
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = buttonHoverStyle.transform;
            e.target.style.boxShadow = buttonHoverStyle.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = buttonStyle.boxShadow;
          }}
          onClick={fetchJoke}
        >
          🎲 Get Another Joke
        </button>
      )}
    </div>
  );
}

export default Joke;
