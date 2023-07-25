import React from "react";
import {StyledParentDiv, StyledBody, ImageDiv, ContentDiv} from './styled'
import './App.css'
import Form from "./form";
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";

function App(){

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pizza/*" element={<Form />}></Route>
    </Routes>
    </>
  );
};
export default App;
