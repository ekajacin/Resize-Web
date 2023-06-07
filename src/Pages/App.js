import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ResizeImage from "./ResizeImage";
import ResizeAudio from "./ResizeAudio";

function App() {
  return (
     <>
      <Router>
      <Dashboard></Dashboard>
        <Switch>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/resizeImage" element={<ResizeImage/>}></Route>
        <Route path="/resizeAudio" element={<ResizeAudio/>}></Route>
        </Switch>
      </Router>
     </>

  );
}

export default App;
