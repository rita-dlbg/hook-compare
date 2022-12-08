import React, {useReducer, useState} from 'react';
import { useNavigate } from "react-router-dom";


const initalState = {
  counts: 0
}

const reducer = (state, action) => {
  switch(action.type){
    case 'Inc' :
      return {counts:state.counts+1}
    case 'Dec' :
      return {counts:state.counts-1}  
  }
}

const UseStateVsReducer = () => {

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initalState)

  const navigate = useNavigate();

  return (
    <div className="define-hooks">
    <h1> useState vs useReducer </h1> 
    <p>Both are used for state managements</p>
    <div className="diffrences">
      <div className="left-define">
        <h3>useState</h3>
        <ul>
          <li>Its type of states are Number, String, Boolean </li>
          <li>It has limit to state transition till one to two times</li>
          <li>It can manage simple and small state transition</li>
          <li>Manage the local states</li>
          <li>Manage indivisual state </li>
        </ul>

        <div className="hook-example">
          <h3>Example with useState</h3>
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count - 1)}>Deduct</button>
        </div>
      </div>
      <div className="right-define">
        <h3>useReducer</h3>
        <ul>
          <li> Type of state are Object or Array</li>
          <li>It can manage state transition many times</li>
          <li>It can manage complex state logics transitions as well </li>
          <li>Manage the global states</li>
          <li>Need only one dispatch method for several state updates</li>
        </ul>

        <div className="hook-example">
          <h3>Example with useReducer</h3>
          <div>{state.counts}</div>
          <button onClick={() => dispatch({type: 'Inc'})}>Add</button>
          <button onClick={() => dispatch({type: 'Dec'})}>Deduct</button>
        </div>
      </div>
    </div>
    <span className="back" onClick={() => navigate('/')}> Back to the list </span>
  </div>
  )
}

export default UseStateVsReducer