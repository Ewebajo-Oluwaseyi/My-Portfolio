import React from 'react';
import Layout from './layout';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
  </div>
  );
}

export default App;
