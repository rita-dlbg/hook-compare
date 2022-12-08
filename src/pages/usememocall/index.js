import React, {useCallback, useMemo, useState} from 'react';
import { useNavigate } from "react-router-dom";

const UseCallbackMemoHooks = () => {

  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);
  const [todo, setTodo] = useState([]);

  const multimemo = useMemo(
    function multicount(){
      return count*5;
    }, [count]);

  const addlist = useCallback(() => {
    setTodo((prev) => [...prev, `new List`]);
  }, [todo]);

  return (
    <div className="define-hooks">
    <h1> useCallback vs UseMemo </h1> 
    <p>Both are used to increase the performance of the react app.</p>
    <div className="diffrences">
      <div className="left-define">
        <h3>useCallback</h3>
        <ul>
          <li>It will return the memoized function </li>
          <li>we use it when we want to return a function or whole component or child components</li>
        </ul>

        <div className="hook-example">
          <h3>Example</h3>
          <h4>List Here:</h4>
          {todo.map((todo, index) => {
            return <p key={index}>{todo + index}</p>
          })}
          <button onClick={addlist}>Add Todo</button>
          
        </div>
      </div>
      <div className="right-define">
        <h3>UseMemo</h3>
        <ul>
          <li> It will return the memoized value </li>
          <li>When ever we need to modify or update any component data values... we need to use useMemo</li>
        </ul>

        <div className="hook-example">
          <h3>Example</h3>
         <h4>Count: {count}</h4>
         <h4>Item: {item}</h4>
         <h4>{multimemo}</h4>
         <button onClick={() => setCount(count + 1)}>update Count</button>
         <button onClick={() => setItem(item * 2)}>update Item</button>
        </div>
      </div>
    </div>
    <span className="back" onClick={() => navigate('/')}> Back to the list </span>
  </div>
  )
}

export default UseCallbackMemoHooks