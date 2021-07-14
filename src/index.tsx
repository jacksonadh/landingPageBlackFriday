import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
