import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function App() {
  return <h1>Hello, Jokes App!</h1>;
}

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
