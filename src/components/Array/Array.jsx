import React from "react";
import "./Array.css";
import ArrayDeclaration from "../../assets/Array/ArrayDeclaration.png";
import AccessingArray from "../../assets/Array/AccessingArray.png";
import AccessingArrayChar from "../../assets/Array/AccessingArrayChar.png";
import ArrayInputSize from "../../assets/Array/ArrayInputSize.png";
import ArrayExample from "../../assets/Array/ArrayExample.png";
import ArrayException from "../../assets/Array/ArrayException.png";
import ArrayNoneElement from "../../assets/Array/ArrayNoneElement.png";
import ForEachLoop from "../../assets/Array/ForEachLoop.png";
import ArraystoString from "../../assets/Array/ArraystoString.png";
import { Link } from 'react-router-dom';

function Array() {
  return (
    <>
      <div className="container">
        <h1>Array</h1>
        <ol className="list">
          <li>An Array is a linear data Structure.</li>
          <li>An Array is a collection of similar data type.</li>
          <li>
            Arrays are stored at contiguous memory locations.{" "}
            <strong>In java interanally may not be continuous.</strong>
          </li>
          <li>Array has fixed size.</li>
          <li>
            Unlike some other languages, Java arrays have a built-in length
            property that you can use to get the size of the array.
          </li>
          <li>Array Object are created in heap memory.</li>
          <li>Heap object are not continuous.</li>
          <li> Array are mutable <strong>(means it will change original array)</strong> in java where
          String are imutable in java.</li>
        </ol>
        <table border="2px">
          <thead>
            <th>Advantage of Java</th>
            <th>Disadvantage of Java</th>
          </thead>
          <tbody>
            <tr>
              <td>Direct access to elements using index. </td>
              <td>
                Searching for specific elements can be slow if the array is
                unsorted.
              </td>
            </tr>
            <tr>
              <td>Simple syntax and easy to understand and use.</td>
              <td>
                Lack of built-in methods for complex operations like searching
                and sorting.
              </td>
            </tr>
            <tr>
              <td>Supports complex data structures like matrices.</td>
              <td>
                Can be complex to manage and understand, especially for large
                multidimensional arrays.
              </td>
            </tr>
            <tr>
              <td>Easy to manipulate and store large data.</td>
              <td>Array size is fixed.</td>
            </tr>
            <tr>
              <td>
                Java provides helpful methods for sorting, searching.
              </td>
              <td>Array can Store a single type of primitives literals.</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2>Array Syntax for initialization and declaration:-</h2>
        <h3>Method one:-</h3>
        <p>datatype [] variable_name=new datatype [size];</p>
        <code>int [] rollNumber=new int [size];</code>{" "}
        <span>new is a keyword used to create an object</span> <br />
        <code>float[] money=new float [size];</code> <br />
        <code>char [] alpha=new char [size];</code>
        <br />
        <code> int [] rollNumber = </code>
        <span>
          declaration of array: rollNumber is getting define in the stack.
        </span>
        <code> = new int [size] </code>
        <span>
          initialisation: actually here obect is being created in the memory
          heap.
        </span>
        <h3>Method Two:-</h3>
        <div className="image">
          <img src={ArrayDeclaration} alt="" className="img1" />
          <img src={ArrayExample} alt="" className="img2" />
        </div>
        <hr />
        {/* Input and Priting Array */}
        <div className="inputPrintingArray">
          <h2>Array Printing and taking Input :-</h2>
          <div className="image">
            <img src={AccessingArray} alt="AccessingArray" className="img3"/>
            <div class="output-wrapper">

            <div className="output">
              <b>Output:</b>
              <code> 1,2,3,4,5</code>
            </div>
            </div>
          </div>
          <div className="image">
            <img src={AccessingArrayChar} alt="" className="img4"/>
            <div class="output-wrapper">
            <div className="output">
              <b>Output: </b> <code>a,B,Z,x,p</code>
            </div>
            </div>
          </div>
          <div className="image">
            <img src={ArrayInputSize} alt=""className="img5" />
            <img src={ForEachLoop} alt="" className="img6" />
            <img src={ArraystoString} alt=""  className="img7"/>
            <hr />
            <p className="exception">If try to access element in array above it size it will throw an error  <strong>ArrayIndextOutofBoundException.</strong></p>
            <img src={ArrayException} alt=""  className="img8"/>
          </div>
        </div>
      <hr />
       <div className="image">
       <img src={ArrayNoneElement} alt=""  className="img9"/>
       </div>
      <p>If you have initialized an array and do not insert any element in the
        array and you are tring to print element of array. It will show you 0
        for Int datatype, 0.0 for Float datatype, null for String datatype.</p>
     
        <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/introduction">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="arraymethod">Next Page</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Array;
