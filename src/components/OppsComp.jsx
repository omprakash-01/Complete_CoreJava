import React from 'react'
import { Routes, Route} from 'react-router-dom'
import OppsIntro from './Opps/OppsIntro'

function OppsComp() {
  return (
    <>
     <Routes>
        <Route path="/Opps/OppsIntro" element={<OppsIntro/>}></Route>
     </Routes> 
    </>
  )
}

export default OppsComp
