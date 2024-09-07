import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Introduction from './Basic/Introduction';
import JavaComp from './JavaComp';
import ArrayComp from './ArrayComp';
import OppsComp from './OppsComp';

function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
      <JavaComp/>
      <ArrayComp/>
      <OppsComp></OppsComp>
    </>
  );
}

export default Home;
