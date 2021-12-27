import React from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experiences from './components/Experiences';
import ContactMe from './components/ContactMe';
import "./App.scss";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Experiences />
      <ContactMe />
    </div>
  );
}

export default App;
