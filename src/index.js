import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(React);
function emitComment(id) { 
  setInterval(() => { 
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `noi dung cua lesson ${id}`
      })
    )
  }, 3000000)
}
emitComment(1)
emitComment(2)
emitComment(3)

root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
