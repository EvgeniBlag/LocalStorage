import { Dispatch } from "redux"
import { AppRootStateType } from "./store"


export type InitialStateType = typeof initialState
const initialState = {
    value:1000
}


export const counterReduser = (state:InitialStateType = initialState, action:ActionType):InitialStateType=>{
    switch (action.type) {
        case 'INC-VALUE':
          return {
            ...state,value : state.value + 1
          }
          case 'SET-VALUE-FROM-LOCALSTORAGE':
            return {
              ...state,value:action.value
            }
        default:
            return state 
    }
}

export const incValueAC = ()=>({type:'INC-VALUE'} as const)

export const setValueFromLocalStorageAC = (value:number)=>({type:'SET-VALUE-FROM-LOCALSTORAGE',value} as const)



// export const incValueTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
//   let currentValue = getState().counter.value;
//   localStorage.setItem("counterValue", JSON.stringify(currentValue + 1));
//   dispatch(incValueAC());
// };



// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     let valueString = localStorage.getItem("counterValue")
//              if (valueString) {
//                let newValue = JSON.parse(valueString)
//                setValueFromLocalStorageAC(newValue)
//              }  
//   };



export type SetValueFromLocalStorageACType = ReturnType <typeof setValueFromLocalStorageAC> 
export type IncValueACType = ReturnType <typeof incValueAC>   

export type ActionType = IncValueACType | SetValueFromLocalStorageACType