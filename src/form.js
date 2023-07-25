import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";
import {StyledParentDiv, StyledBody, FormDiv, InnerFormDiv} from './styled'

export default function Form(props){

    return(
        <>
        <StyledParentDiv>
            <StyledBody>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" className="link" id="header-Link">Home</Link>
          <Link to="/help" className="link" id="header-Link">Help</Link>
        </div>
      </StyledBody>
        <FormDiv>
            <InnerFormDiv>
                <h1>Build Your Own Pizza:</h1>
            </InnerFormDiv>
            <InnerFormDiv>
                <div id="pizza-image"/>
            </InnerFormDiv>
            <form id="pizza-form">

            </form>
        </FormDiv>
        </StyledParentDiv>
        </>
    )
}