import React from "react";
import {StyledHeader} from './styled'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App(){


  return (
    <BrowserRouter>
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </StyledHeader>
    </BrowserRouter>
  );
};
export default App;
