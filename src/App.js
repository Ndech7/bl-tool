import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlTool from "./components/BL-Tool";
import Bl from "./components/Bl"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-sky-600 nav text-white">
          <div className="flex">
            <img
              className="px-1 uon_logo"
              src={require("./assets/Screenshot 2023-09-11 152153.png")}
              alt="none"
            />

            <img
              className="px-1 uon_logo"
              src={require("./assets/Hochschule-Karlsruhe-Emblem.png")}
              alt="none"
            />
            <img
              className=" px-1 uon_logo"
              src={require("./assets/pretoria.png")}
              alt="none"
            />
            <img
              className="px-1 uon_logo"
              src={require("./assets/BWS LOGO.png")}
              alt="none"
            />
          </div>
          <Link className="link" to="/">
            Overview
          </Link>
          <Link className="link" to="/bl-tool">
            BL-Tool
          </Link>
          <Link className="link" to="/bl">
            BL
          </Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bl-tool" element={<BlTool />} />
          <Route path="/bl" element={<Bl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
