import React from "react"
import { Route, Routes, Link } from "react-router-dom";
import { homeRestaurants } from "./contentData";
import {StyledParentDiv, StyledBody, FormDiv, InnerFormDiv} from './styled'

export default function Form(props){

    let disabled = true

    function change(e){

    }

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
                <h2>Order Form Below:</h2>
            </InnerFormDiv>
            <InnerFormDiv>
                <div id="pizza-image"/>
            </InnerFormDiv>
            <form id="pizza-form">
                <InnerFormDiv>
                    <h2>First, what's your name?</h2>
                    <label id="text"> Name:
                    <input
                        name="name"
                        type="text"
                        id="name-input"
                        value=""
                        placeholder="Input Name"
                        onChange={(e) => change(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>What amount of calories today?</h2>
                    <label id="size"> Size:
                        <select id="size-dropdown" name="size" onChange={(e) => change(e)}>
                            <option value="">Select Size</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                            <option value="Atomic">Atomic</option>
                        </select>
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>What toppings - hmm?</h2>
                    <label id="selecttop"> Pup-peroni
                    <input
                        name=""
                        type="checkbox"
                        id="pupperoni"
                        checked=""
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Moo-shroom
                    <input
                        name=""
                        type="checkbox"
                        id="mooshroom"
                        checked=""
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Black Licorice
                    <input
                        name=""
                        type="checkbox"
                        id="licorice"
                        checked=""
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Bagel-Bites (Pizza Kind)
                    <input
                        name=""
                        type="checkbox"
                        id="bagelbites"
                        checked=""
                        onChange={(e) => change(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>Any special requests?</h2>
                    <label id="text"> Request:
                    <input
                        name="special"
                        type="text"
                        id="special-text"
                        value=""
                        placeholder="Input Request"
                        onChange={(e) => change(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <Link disabled={disabled}>Submit Order</Link>
                </InnerFormDiv>
            </form>
        </FormDiv>
        </StyledParentDiv>
        </>
    )
}