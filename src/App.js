import React from "react";
import {StyledParentDiv, StyledBodyHeader} from './styled'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import { homeRestraunts } from "./contentData";

function App(){


  return (
    <StyledParentDiv>
      <StyledBodyHeader>
        <h1>Lambda Eats</h1>
        <div>
          <h2>Home</h2>
          <h2>Help</h2>
        </div>
      </StyledBodyHeader>
    </StyledParentDiv>
  );
};
export default App;
