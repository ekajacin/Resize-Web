import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ResizeImage from "./ResizeImage";
import ResizeAudio from "./ResizeAudio";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/resizeImage" element={<ResizeImage/>}></Route>
        <Route path="/resizeAudio" element={<ResizeAudio/>}></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
