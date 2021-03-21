import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { increment, decrement } from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information</h3> : ""}
    </div>
  );
}

export default App;
