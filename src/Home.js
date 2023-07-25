import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";
import {StyledParentDiv, StyledBody, Image, ContentDiv} from './styled'

export default function Home(props) {

    return (
        <StyledParentDiv>
        <StyledBody>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" className="link" id="header-Link">Home</Link>
          <Link to="" className="link" id="header-Link">Help</Link>
        </div>
      </StyledBody>
      <div id="parent-Background">
        <StyledBody>
        <div id="header-Photo">
          <div id="header-Photo-Text">
            <h2>You're favorite food delivered while coding.</h2>
            <Link to="/pizza" className="link" id="order-pizza">Pizza?</Link>
          </div>
        </div>
      </StyledBody>
      </div>
      <div id="parent-Background">
        <h1>Food Delivery</h1>
            <ContentDiv>
              {
              homeRestaurants.map((element, index) => {
                return (
                  <Image>
                    <div className="imageDiv" key={index}>
                    <img src={element.image}/>
                    <h3>{element.title}</h3>
                    <>
                      {
                        Object.keys(element.type).map((type, inx) => {
                          return <h4 key={inx}>{element.type[type]}</h4>
                        })
                      }
                    </>
                    <>
                      {
                        Object.keys(element.time).map((time, inx) => {
                          return <h4 key={inx}>{element.time[time]}</h4>
                        })
                      }
                    </>
                    </div>
                  </Image>
                )
              })
            }
            </ContentDiv>
      </div>
    </StyledParentDiv>
    )
}