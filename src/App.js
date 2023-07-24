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
          <Link to="/" id="link" className="header-Link">Home</Link>
          <Link to="/pizza" id="link" className="header-Link">Help</Link>
        </div>
      </StyledBodyHeader>
      <StyledBodyHeader>
        <div id="header-Photo">
          <div id="header-Photo-Text">
            <h2>You're favorite food delivered while coding.</h2>
            <Link to="/pizza" id="link">Pizza?</Link>
          </div>
        </div>
      </StyledBodyHeader>
    </StyledParentDiv>
  );
};
export default App;
