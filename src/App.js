import React from "react";
import {StyledParentDiv, StyledBody, ImageDiv, ContentDiv} from './styled'
import './App.css'
import Form from "./form";
import Home from "./Home";
import Submit from "./Submit";
import { Route, Routes, Link } from "react-router-dom";
import * as Yup from 'yup'

function App(){

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pizza/*" element={<Form />}></Route>
<<<<<<< HEAD
=======
        <Route path="pizza/submit-order" element={<Submit />}></Route>
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
    </Routes>
    </>
  );
};
export default App;
