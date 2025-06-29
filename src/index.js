import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import GlobalState from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  //Wraps the application with the BrowserRouter to enable routing.
  <BrowserRouter>
  {/* Wraps the application with React.StrictMode to highlight potential problems in the application. */}
    <React.StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>

);

reportWebVitals();