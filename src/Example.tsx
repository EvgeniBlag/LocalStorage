import React, { useEffect, useState } from "react";
import './App.css';

export const Example = () => {

    const [value,setValue]= useState (()=>{
        let valueString = localStorage.getItem("counterValue")
        if (valueString) {
          let newValue = JSON.parse(valueString)
        return newValue
        }
    })

   useEffect (()=>{
        localStorage.setItem('counterValue',JSON.stringify(value))
   },[value])

   
   const incHandler = () => {
    setValue ( value + 1 )
}
      


    return ( 

        <div className="Wrapper">

        <h1 style={{color:"white"}}>{value}</h1>

        <div>
        <button onClick={incHandler} className="Button1">inc</button>
        </div>
       
    </div>
    )
}
