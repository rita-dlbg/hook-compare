import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentType from './pages/typecomponent';
import HighOrderComponent from './pages/hoc';
import PageLink from './pages/list';
import PureComp from './pages/purecomponent';
import UseEffectHooks from './pages/useffect';
import UseCallbackMemoHooks from './pages/usememocall';
import UseStateVsReducer from './pages/usestate';



const Main = (props) => {

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route path="/" element={<PageLink />} />
            <Route path="/useffect" element={<UseEffectHooks />} /> 
            <Route path="/usememocall" element={<UseCallbackMemoHooks />} />
            <Route path="/usestate" element={<UseStateVsReducer />} />
            <Route path="/typecomponent" element={<ComponentType />} />
            <Route path="/purecomponent" element={<PureComp />} />
            <Route path="/hoc" element={<HighOrderComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
