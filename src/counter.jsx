import { useState, useReducer } from "react"
import { counterReducer } from "./reducers/reducerCounter"


export default function Counter () {

    const [counter, dispatch] = useReducer(counterReducer, 0)

    return (
        <>
            <div className="wrapper">
                <button onClick={()=>{
                    dispatch({
                        type: 'increment',
                        counter: counter,
                    })
                }}>Click me to +</button>
                <button onClick={()=>{
                    dispatch({
                        type: 'decrement',
                        counter: counter,
                    })
                }}>Click me to -</button>
                {counter}
            </div> 
        </>
    )
}