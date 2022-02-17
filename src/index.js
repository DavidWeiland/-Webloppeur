import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Home from './Pages/Home'
import Error from './Pages/Error'
import ContactMe from './Pages/ContactMe';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
