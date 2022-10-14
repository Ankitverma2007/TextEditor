import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element ={<About mode={mode} toggleMode={toggleMode} />}/>
             
            <Route exact path="/" element = {<TextForm
                heading="Enter The Text Here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />} />
             
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
