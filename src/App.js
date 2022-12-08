import React from 'react';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import './App.css';

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Routes history={history} />
    </div>
  );
}

export default App;
