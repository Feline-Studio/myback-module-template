import React, { useEffect, useState } from "react";
import "./App.css";
import SDK from '@feline-studio/myback-sdk';

function App() {
  const sdk = new SDK();

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div >
  );
}

export default App;
