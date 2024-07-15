import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PlantsContextProvider from './Context/PlantsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlantsContextProvider>
    <App />
  </PlantsContextProvider>
);
