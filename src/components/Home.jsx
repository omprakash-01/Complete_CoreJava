import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Introduction from './Basic/Introduction';
import Array from './Array/Array';
import ArrayMethod from './Array/ArrayMethod';

function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/array" element={<Array />} />
        <Route path="/array/arraymethod" element={<ArrayMethod />} />
      </Routes>
    </>
  );
}

export default Home;
