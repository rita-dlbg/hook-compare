import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

const UseEffectHooks = () => {

  const navigate = useNavigate();

  const [number, setNumber] = useState(0);
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    if(number === 0) setNumber(10 + Math.random());
  }, [number])

  useLayoutEffect(() => {
    if(layout === 0) setLayout(20 + Math.random() * 2);
  }, [layout])

  return (
    <div className="define-hooks">
      <h1> useEffect vs useLayoutEffect </h1> 
      <div className="diffrences">
        <div className="left-define">
          <h3>useEffect</h3>
          <ul>
            <li>UseEffect invoked asynchronously after render the DOM components on the screen </li>
            <li>Basically given change to the layout will be reflect once on screen with state change</li>
          </ul>

          <div className="hook-example">
            <h3>Example</h3>
            <h4>{number}</h4>
            <button onClick={() => setNumber(0)}>Check Number</button>
          </div>
        </div>
        <div className="right-define">
          <h3>useLayoutEffect</h3>
          <ul>
            <li>It workes synchronously after all DOM loading is done and before changes are visible on screen  </li>
            <li>It will not show the change to user</li>
          </ul>

          <div className="hook-example">
            <h3>Example</h3>
            <h4>{layout}</h4>
            <button onClick={() => setLayout(0)}>Check Number</button>
          </div>
        </div>
      </div>

      <span className="back" onClick={() => navigate('/')}> Back to the list </span>
    </div>
  )
}

export default UseEffectHooks