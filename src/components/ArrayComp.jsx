import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Array from './Array/Array'
import ArrayMethod from './Array/ArrayMethod'
function ArrayComp() {
  return (
    <>
     <Routes>
     <Route path="/array/array" element={<Array />} />
     <Route path="/array/arraymethod" element={<ArrayMethod />} />
     </Routes> 
    </>
  )
}

export default ArrayComp
