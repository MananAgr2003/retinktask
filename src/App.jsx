// src/App.js

import { Link } from "react-router-dom"; // Inside your component
import { Routers } from "./Routes";
import LeftSidebar from "./global/LeftSidebar";
import "./App.css";
import { Navbar } from "./global/Navbar";

function App() {
  return (
    <>
      <LeftSidebar></LeftSidebar>
      <Navbar></Navbar>
      <Routers />
    </>
  );
}

export default App;
