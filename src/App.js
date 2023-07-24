import React from "react";
import {StyledParentDiv, StyledBodyHeader} from './styled'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";

function App(){

  const testData = [
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Pasta La Vista",
      type: {
        nationality: "Italian",
        service: "Takeout",
        food: "Pasta"
      },
      time: {
        minutes: "15-25 Min",
        delivery: "5.99 Delivery Fee"
      }
    }
  ]


  return (
    <StyledParentDiv>
      <StyledBodyHeader>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" className="link" id="header-Link">Home</Link>
          <Link to="/pizza" className="link" id="header-Link">Help</Link>
        </div>
      </StyledBodyHeader>
      <div id="parent-Background">
        <StyledBodyHeader>
        <div id="header-Photo">
          <div id="header-Photo-Text">
            <h2>You're favorite food delivered while coding.</h2>
            <Link to="/pizza" className="link" id="photo-Link">Pizza?</Link>
          </div>
        </div>
      </StyledBodyHeader>
      </div>
      <div id="parent-Background">
        <StyledBodyHeader>
            {

              homeRestaurants.map(element => {
                return (
                  <div>
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
                  </div>
                )
              })
            }
        </StyledBodyHeader>
      </div>
    </StyledParentDiv>
  );
};
export default App;
