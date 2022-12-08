import React from 'react';
import { useNavigate } from "react-router-dom";
import EnhancedComponent from '../../component/hoc';


const HighOrderComponent = () => {
    const navigate = useNavigate();

  return (
    <div className="define-hooks">
    <h1> HOC (High Order Component)</h1> 
    <p>A component who pick an another component as prop and returns as diffrent component is called HOC</p>
   
    <div className="diffrences">
     <div >
     <h2>Why we use it</h2>
    <p>They are the pattern that emerges from React’s compositional nature. The component transforms props
       into UI, and a higher-order component converts a component into another component. 
       The examples of HOCs are Redux’s connect and Relay’s createContainer.
    </p>
    <div className="hook-example">
     <EnhancedComponent/>
     </div>
     </div>   
    </div>
   
    <span className="back" onClick={() => navigate('/')}> Back to the list </span>
  </div>
  )
}


export default HighOrderComponent