import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import User from "./components/User";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:flex w-full relative">
      <div className="w-full">
        <User isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Footer setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
