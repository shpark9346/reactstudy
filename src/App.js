import React from 'react';
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';



function App() {
  return (
    <>
    <div className='nav'>
      <button className='button'><Link to = '/page1'>페이지1</Link></button>
      <button className='button'><Link to = '/page2'>페이지2</Link></button>
      <button className='button'><Link to = '/'>홈</Link></button>
    </div>

    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/page1' element = {<Page1/>} />
      <Route path = '/page2' element = {<Page2/>}/>
    </Routes>

    </>
  );

};

export default App;
