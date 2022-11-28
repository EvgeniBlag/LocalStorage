import React, { useEffect, useState } from "react";
import './App.css';
import { AppRootStateType } from "./bll/store";
import {useDispatch, useSelector} from 'react-redux'
import { incValueAC } from "./bll/counter-reduser";


export const Example = () => {

    const value = useSelector<AppRootStateType, number> (state => state.counter.value)
    const dispatch = useDispatch()

 
    const incHandler = () => {
        dispatch(incValueAC())
    }

  

    return ( 

        <div className="Wrapper">

        <h1 style={{color:"white"}}>{value}</h1>

        <div>
        <button onClick={incHandler}  className="Button1">inc</button>
        </div>
       
    </div>
    )
}
