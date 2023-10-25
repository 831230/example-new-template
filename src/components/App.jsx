import React from 'react';
import {Routes, Route} from "react-router-dom";

import Home from './Home';
import Aboute from './Aboute';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboute' element={<Aboute/>}/>
      </Routes>
      
    </div>
  );
};
