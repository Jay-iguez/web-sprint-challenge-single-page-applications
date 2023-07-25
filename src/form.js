import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";
import {StyledParentDiv, StyledBodyHeader, ImageDiv, ContentDiv} from './styled'

export default function Form(props){

    return(
        <>
        <StyledParentDiv>
            <StyledBodyHeader>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" className="link" id="header-Link">Home</Link>
          <Link to="/help" className="link" id="header-Link">Help</Link>
        </div>
      </StyledBodyHeader>
        </StyledParentDiv>
        </>
    )
}