import React from "react";
import ImageSearch from "components/ImageSearch";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ImageSearch />
      </header>
    </div>
  );
}

export default App;
