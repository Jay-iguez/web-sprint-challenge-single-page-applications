import React from "react"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import {StyledParentDiv, StyledBody, FormDiv, InnerFormDiv} from './styled'
import formSchema from "./formSchema";
import * as Yup from 'yup'

export default function Form(props){
    const {formValues, formErrors, setFormErrors, disabled, setDisabled, submit, change} = props

    

    function validate (name, value){
        Yup.reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ""}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
    

    const formChange = (e) => {
        const {name, value, type, checked} = e.target
        const typeOf = type === "checkbox" ? checked : value
        validate(name, typeOf)
        change(name, typeOf)
    }
    
    const formSubmit = (e) => {
        e.preventDefault()
        submit()
    }

    
    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])


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
            <form id="pizza-form" onSubmit={(e) => formSubmit(e)}>
                <InnerFormDiv>
                    {
                        Object.keys(formErrors).map((error, index) => {
                            return <h1 key={index}>{formErrors[error]}</h1>
                        })
                    }    
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>First, what's your name?</h2>
                    <label id="text"> Name:
                    <input
                        name="name"
                        type="text"
                        id="name-input"
                        value={formValues.name}
                        placeholder="Input Name"
                        onChange={(e) => formChange(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>What amount of calories today?</h2>
                    <label id="size"> Size:
                        <select id="size-dropdown" name="size" onChange={(e) => formChange(e)} value={formValues.size}>
                            <option value="">Select Size</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                            <option value="Atomic">Atomic</option>
                        </select>
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    <h2>What additional toppings - hmm?</h2>
                    <label id="selecttop"> Pup-peroni
                    <input
                        type="checkbox"
                        name="pupperoni"
                        checked={formValues.checked}
                        onChange={(e) => formChange(e)}
                    />
                    </label>
                    <label id="selecttop"> Moo-shroom
                    <input
                        type="checkbox"
                        name="mooshroom"
                        checked={formValues.checked}
                        onChange={(e) => formChange(e)}
                    />
                    </label>
                    <label id="selecttop"> Black Licorice
                    <input
                        type="checkbox"
                        name="licorice"
                        checked={formValues.checked}
                        onChange={(e) => formChange(e)}
                    />
                    </label>
                    <label id="selecttop"> Bagel-Bites (Pizza Kind)
                    <input
                        type="checkbox"
                        name="bagelbites"
                        checked={formValues.checked}
                        onChange={(e) => formChange(e)}
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
                        onChange={(e) => formChange(e)}
                    />
                    </label>
                </InnerFormDiv>
                <InnerFormDiv>
                    
                        <button disabled={disabled} id="order-button">Submit Order</button>
                       
                </InnerFormDiv>
            </form>
        </FormDiv>
        </StyledParentDiv>
        </>
    )
}