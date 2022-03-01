import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./About";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  let [mode, setMode] = useState("light");
  let [txtColor, setTxtColor] = useState("dark");

  function changeMode(e) {
    if (e.target.className === "btn btn-success mx-1") {
      setMode("success");
      setTxtColor("light");
      document.body.style.backgroundColor = "#AFE1AF";
    }
    else if (e.target.className === "btn btn-danger mx-1") {
      setMode("danger");
      setTxtColor("light");
      document.body.style.backgroundColor = "#E97451";
    }
    else if (e.target.className === "btn btn-warning mx-1") {
      setMode("warning");
      setTxtColor("dark");
      document.body.style.backgroundColor = "#FFFF8F";
    }
    else if (e.target.className === "btn btn-dark mx-1") {
      setMode("dark");
      setTxtColor("light");
      document.body.style.backgroundColor = "#A9A9A9";
    }
    else {
      setMode("light");
      setTxtColor("dark");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
      <Router>
      <Navbar title="Textutils" mode={mode} changeMode={changeMode} txtColor={ txtColor }/>
        <div className='container my-3'>
          <Routes>
          <Route path="/about" element={<About mode={mode} txtColor={ txtColor }/>} />
          <Route path="/" element={<TextForm heading="Enter text to analyse" mode={mode} txtColor={ txtColor }/>} />
          </Routes>  
        </div>
      </Router>
  );
}

export default App;
