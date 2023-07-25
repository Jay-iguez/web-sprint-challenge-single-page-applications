import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";
import {StyledParentDiv, StyledBody, ImageDiv, ContentDiv} from './styled'

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
              homeRestaurants.map(element => {
                return (
                  <ImageDiv>
                    <img src={element.image}/>
                    <h3>{element.title}</h3>
                    <div>
                      {
                        Object.keys(element.type).map(type => {
                          return <h4>{element.type[type]}</h4>
                        })
                      }
                    </div>
                    <div>
                      {
                        Object.keys(element.time).map(time => {
                          return <h4>{element.time[time]}</h4>
                        })
                      }
                    </div>
                  </ImageDiv>
                )
              })
            }
            </ContentDiv>
      </div>
    </StyledParentDiv>
    )
}