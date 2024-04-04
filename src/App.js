import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlwet = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#1d3e55";
      showAlwet("success", "Dark mode has been enablad");
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlwet("success", "Light mode has been enablad");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="APP"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btntext}
        />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Switch>
            {/* <Route path="/about">{ <About mode={mode} /> }</Route> */}
            <Route path="/">
              <TextForm
                heading="Enter your Text"
                mode={mode}
                showAlwet={showAlwet}
              />
            </Route>
          </Switch>
        </div>
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
