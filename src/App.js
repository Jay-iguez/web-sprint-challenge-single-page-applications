import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { initalFormErrors, initialFormValues, initialDisabled } from "./contentData";
import './App.css'
import Form from "./form";
import Home from "./Home";
import Submit from "./Submit";
import { Route, Routes, useNavigate} from "react-router-dom";

function App(){
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [formResult, setFormResult] = useState(initialFormValues)
  const [disabled, setDisabled] =  useState(initialDisabled)

  const navigate = useNavigate()

  function submit() {
    const newData = formValues
    navigate('pizza/order-submit')

    axios.post("https://reqres.in/api/orders", newData)
    .then(res => {
        setFormResult(res.data)
        console.log(`hey`, formResult)
    })
    .catch(err => {
        console.error(err)
    })
}

function change(name, type){
    setFormValues({...formValues, [name] : type})
}


  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pizza/*" element={<Form formValues={formValues} formErrors={formErrors} setFormErrors={setFormErrors} disabled={disabled} setDisabled={setDisabled} submit={submit} change={change} />}></Route>
        <Route path="pizza/order-submit" element={<Submit />}></Route>
    </Routes>
    </>
  );
};
export default App;
