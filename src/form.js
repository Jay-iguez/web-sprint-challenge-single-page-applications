import React from "react"
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
<<<<<<< HEAD
import { initalFormValues, initalFormErrors } from "./contentData";
=======
import formSchema from './formSchema'
import { initalFormErrors, initialFormValues, initialDisabled } from "./contentData";
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
import {StyledParentDiv, StyledBody, FormDiv, InnerFormDiv} from './styled'
import Submit from "./Submit";
import * as Yup from 'yup'


export default function Form(props){

<<<<<<< HEAD
    const [formValues, setFormValues] = useState(initalFormValues)
    const [formErrors, setFormErrors] = useState(initalFormErrors)
    const [formResult, setFormResult] = useState({})

    let disabled = true
=======
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initalFormErrors)
    const [formResult, setFormResult] = useState(initialFormValues)
    const [disabled, setDisabled] =  useState(initialDisabled)

    function validate (name, value){
        Yup.reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ""}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)

    function change(e){
        const {name, value, type, checked} = e.target
        const typeOf = type === "checkbox" ? checked : value
<<<<<<< HEAD
        setFormValues({...formValues, [name]: typeOf})
=======
        validate(name, typeOf)
        setFormValues({...formValues, [name] : typeOf})
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
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
            <form id="pizza-form">
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
                    <h2>What additional toppings - hmm?</h2>
                    <label id="selecttop"> Pup-peroni
                    <input
                        type="checkbox"
                        name="pupperoni"
<<<<<<< HEAD
                        checked={formValues.pupperoni}
=======
                        checked={formValues.checked}
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Moo-shroom
                    <input
                        type="checkbox"
                        name="mooshroom"
<<<<<<< HEAD
                        checked={formValues.mooshroom}
=======
                        checked={formValues.checked}
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Black Licorice
                    <input
                        type="checkbox"
                        name="licorice"
<<<<<<< HEAD
                        checked={formValues.licorice}
=======
                        checked={formValues.checked}
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
                        onChange={(e) => change(e)}
                    />
                    </label>
                    <label id="selecttop"> Bagel-Bites (Pizza Kind)
                    <input
                        type="checkbox"
                        name="bagelbites"
<<<<<<< HEAD
                        checked={formValues.bagelbites}
=======
                        checked={formValues.checked}
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
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
<<<<<<< HEAD
                        <Link to="order-submit" id="submit">Submit Order</Link>
                    }
                    
=======
                         <Link id="submitButton" to="submit-order">Submit Order</Link>
                    }
>>>>>>> 4985527 (Create formSchema logic and link to Submit upon validation of form in formJS)
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