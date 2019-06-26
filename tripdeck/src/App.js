import React from "react";
import "./App.css";
import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="App">
      <h1>Facebook Auth Example</h1>
      <p>To get started, authenticate with Facebook</p>
      <Facebook />
    </div>
  );
}

export default App;
