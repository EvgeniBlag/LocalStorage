import React, { useState } from "react";
import './App.css';

export const Example = () => {

    const [value,setValue]=useState(0)

    const incHandler = () => {
        setValue ( value + 1 )
    }

    const setToLocalStorage = () => {
       localStorage.setItem('counterValue',JSON.stringify(value))
       localStorage.setItem('counterValue +1',JSON.stringify(value + 1))
    }

    const getToLocalStorage = () => {
      let valueString = localStorage.getItem("counterValue");
      if (valueString) {
        let newValue = JSON.parse(valueString);
        setValue(newValue);
      }
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
      }

      
    const removeItemLocalStorage = () => {
        localStorage.removeItem('counterValue +1')
      }

    return ( 

        <div className="Wrapper">

        <h1 style={{color:"white"}}>{value}</h1>

        <div>
        <button onClick={incHandler} className="Button1">inc</button>

        <button onClick={setToLocalStorage} className="Button2">set</button>

        <button onClick={ getToLocalStorage} className="Button3">get</button>

        <button onClick={clearLocalStorage} className="Button4">clear</button>

        <button onClick={removeItemLocalStorage} className="Button5">removeItem</button>
        </div>
       
    </div>
    )
}
