import React from 'react';
import { useNavigate } from "react-router-dom";
import FunctionalComponent from '../../component/functioncomp';
import ClassComponent from '../../component/classcomp';

const ComponentType = () => {

    const navigate = useNavigate();

  return (
    <div className="define-hooks">
    <h1> Class based component vs functional components </h1> 
    
    <div className="diffrences">
      <div className="left-define">
        <h3>Class based component</h3>
        <ul>
          <li>It always extends the component</li>
          <li>The state can be accessed</li>
          <li>It access the state with 'this' to access props and state management</li>
          <li> We can use lifecycle hook with class based component </li>
          <li>If we want to use state(without react hooks) and need access to lifecycle</li>
          <li>It must have the render() method returning JSX which is similar to html</li>
        </ul>

        <div className="hook-example">
          <h3>Example</h3>
         <ClassComponent />
        </div>
      </div>
      <div className="right-define">
        <h3>functional components</h3>
        <ul>
          <li> It use the props directly so no need to extend the component</li>
          <li>Access state was not possible previously but with useState it is possible now</li>
          <li>Lifecycle hook not possible</li>
          <li>Where we dont want to manage state we will use class base component</li>
          <li>There is no render method used in functional components.</li>
        </ul>

        <div className="hook-example">
          <h3>Example</h3>
          <FunctionalComponent />
        </div>
      </div>
    </div>
    <span className="back" onClick={() => navigate('/')}> Back to the list </span>
  </div>
  )
}

export default ComponentType