import React from 'react';
import { useNavigate } from "react-router-dom";

const PageLink = () => {

      const navigate = useNavigate();

  return (
    <>
    <div className="links">
    <h1>React Hooks Comparison List</h1>

       <div className="comp-btns">
        <button  onClick={() => navigate('/useffect')} >useEffect vs useLayoutEffect</button>
        <button onClick={() => navigate('/usememocall')} >useCallback vs UseMemo</button>
        <button onClick={() => navigate('/usestate')} >useState vs useReducer</button>
        <button onClick={() => navigate('/typecomponent')} >Class based component vs functional components</button>
        <button onClick={() => navigate('/purecomponent')} >Pure components</button>
        <button onClick={() => navigate('/hoc')} >HOCs</button>
       </div>
       </div>   
    </>  
  )
}

export default PageLink