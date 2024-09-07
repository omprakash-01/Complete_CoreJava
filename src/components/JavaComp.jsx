import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Java from './Java/Java';
import Literals from './Java/Literals';

function JavaComp() {
  return (
    <>
      <Routes>
      <Route path="/java/java" element={<Java/>}/>
      <Route path="/java/literals" element={<Literals/>}/>
      </Routes>
    </>
  )
}

export default JavaComp
