import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import User from "./components/User";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full">
      <div className="w-full">
        <User isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
}

export default App;
