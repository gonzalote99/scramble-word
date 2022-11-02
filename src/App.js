import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar.js';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
 function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
       <Route path="/" element={< FirstPage/>} />
       <Route path="/play" element={< SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;