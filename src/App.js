import React from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
