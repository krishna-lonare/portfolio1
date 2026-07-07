import { useState } from "react";
import "./App.css";


import Hero from "./Components/Hero";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
    
      <Navbar/>
     
      <Outlet/>
       
    </>
  );
}

export default App;