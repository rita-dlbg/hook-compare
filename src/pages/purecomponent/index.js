import React from 'react';
import { useNavigate } from "react-router-dom";
import PureComponent from '../../component/purecomponent';

const PureComp = () => {

    const navigate = useNavigate();

  return (
    <div className="define-hooks">
    <h1> Pure components</h1> 
    <p>This is similar to the react component but used when we need to use <code>shouldComponentUpdate()</code>.
    Normal component did not need permission to update the component.</p>
   
    <div className="diffrences">
     <div >
     <h2>Why we use it</h2>
    <p>Sometimes in our components the same values are generated when it renders with same state value and it will effect on log time
        when it renders again and again... to rid this we use pure component.
    </p>
    <div className="hook-example">
     <PureComponent/>
     </div>
     </div>   
    </div>
   
    <span className="back" onClick={() => navigate('/')}> Back to the list </span>
  </div>
  )
}

export default PureComp;