import React from "react";
import "./App.css";
import Application from "./components/app/Application";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  );
}

export default App;
