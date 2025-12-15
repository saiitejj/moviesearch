import React from "react";
import {Routes,Route} from "react-router-dom";
import MoviesFree from "./pages/moviesFree";
import MoviesPaid from "./pages/moviesPaid";
import MainPage from "./pages/MainPage";

function App(){
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/moviesFree" element={<MoviesFree />}/>
      <Route path="/moviesPaid" element={<MoviesPaid />}/>
    </Routes>
  )
}
export default App