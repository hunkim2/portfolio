import React from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
