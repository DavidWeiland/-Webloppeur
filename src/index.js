import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Home from './Pages/Home'
import Error from './Pages/Error'
import ContactMe from './Pages/ContactMe';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
