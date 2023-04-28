import React, { useState } from 'react'
import Store from '../Redux/ReduxStore'
import { useSelector } from 'react-redux'

const style = {
  padding: "0.8rem 2.5rem",
  fontSize: "1.1rem",
  margin: "1rem 0.2rem",
  backgroundColor: "skyblue",
  border: "2px solid skyblue"
}

const Button = () => {
  let [state, setState] = useState(0)

  const data = useSelector((counts) => {
    return counts
  })

  const CountInc = () => {
    setState(state = state + 1)

    Store.dispatch({
      type: "num",
      count: state
    })
  }
  const CountDec = () => {
    if (state>0) {
      setState(state = state - 1)
      Store.dispatch({
        type: "num",
        count: state
      })
    }
    else{
      alert("number should be greater than 0")
    }
  }



  const Reset = () => {
    setState(state = 0)
    Store.dispatch({
      type: "num",
      count: state
    })
  }



  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2 style={{ color: "red" }}>Counter app</h2>
      <hr style={{ width: "50%", color: "green" }} />
      <h2 style={{color:'purple'}}>{data.name}</h2>
      <button style={style} onClick={CountInc}>Increment</button>
      <button style={style} onClick={CountDec}>Decrement</button>
      <button style={style} onClick={Reset}>Reset</button>
    </div>
  )
}

export default Button