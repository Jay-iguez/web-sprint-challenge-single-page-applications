import React from "react"
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { initalFormValues, initalFormErrors } from "./contentData";
import {StyledParentDiv, StyledBody, FormDiv, InnerFormDiv} from './styled'


export default function Form(props){

    const [formValues, setFormValues] = useState(initalFormValues)
    const [formErrors, setFormErrors] = useState(initalFormErrors)
    const [formResult, setFormResult] = useState({})

    let disabled = true

    function change(e){
        const {name, value, type, checked} = e.target
        const typeOf = type === "checkbox" ? checked : value
        setFormValues({...formValues, [name]: typeOf})
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
                        value={formValues.name}
                        placeholder="Input Name"
                        onChange={(e) => change(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>What amount of calories today?</h2>
                    <label id="size"> Size:
                        <select id="size-dropdown" name="size" onChange={(e) => change(e)} value={formValues.size}>
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
                        type="checkbox"
                        name="pupperoni"
                        checked={formValues.pupperoni}
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Moo-shroom
                    <input
                        type="checkbox"
                        name="mooshroom"
                        checked={formValues.mooshroom}
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Black Licorice
                    <input
                        type="checkbox"
                        name="licorice"
                        checked={formValues.licorice}
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Bagel-Bites (Pizza Kind)
                    <input
                        type="checkbox"
                        name="bagelbites"
                        checked={formValues.bagelbites}
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
                        value={formValues.special}
                        placeholder="Input Request"
                        onChange={(e) => change(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    {
                        disabled === true ?
                        <button disabled={disabled}>Submit Order</button>
                        :
                        <Link to="order-submit" id="submit">Submit Order</Link>
                    }
                    
                </InnerFormDiv>
            </form>
        </FormDiv>
        <Routes>
            <Route path="order-submit"></Route>
        </Routes>
        </StyledParentDiv>
        </>
    )
}