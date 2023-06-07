import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResizeImage from "./ResizeImage";
import ResizeAudio from "./ResizeAudio";
import Dashboard from "./Dashboard";

function App() {
  return (
     <>
     <BrowserRouter>
     <Dashboard>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/resizeImage" element={<ResizeImage/>}></Route>
        <Route path="/resizeAudio" element={<ResizeAudio/>}></Route>
      </Routes>
      </Dashboard>
      </BrowserRouter>
     </>

  );
}

export default App;
