import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './task2/Navbar'
import TaskRouter from './TaskRouter';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Navbar/> */}
     <TaskRouter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
