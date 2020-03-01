import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
