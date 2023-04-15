import React, { useState } from "react";
import Form from "./compo/Form";
import './App.css';



const App=()=>{

  return (
    <>
    <div className="container">
     <div >
      <h1 className="heading">To-Do List Web App</h1>
      <div className="form"><Form/></div>
      
      </div>
    </div>
    </>
  );
}

export default App;
