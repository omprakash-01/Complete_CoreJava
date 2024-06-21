import React from 'react'
import ArrayMethod1 from '../../assets/Array/ArrayMethod1.png'
import ArrayMethod2 from '../../assets/Array/ArrayMethod2.png'
import { Link } from 'react-router-dom';

function ArrayMethod() {
  return (
    <>
    <div className="container">
    <div className="ArrayMethod">
        <h1>Array & Method</h1>
        <p>In java Array only by pass by value and it is not passed by reference.</p>
        <p>How to pass an Array in Method</p>
        <p><b>For Example:</b></p>
        <div className="image">
            <img src={ArrayMethod1} alt="ArrayMethodExample" />
            <img src ={ArrayMethod2} alt='ArrayMethodExample' />
        </div>
        
        <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/array">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="">Next Page</Link>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default ArrayMethod
