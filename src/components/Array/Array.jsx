import React, { useState } from "react";
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
import ImageModal from '../ImageModal'; 

function Array() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const imgStyle = {
    cursor: 'pointer',
  };

  return (
    <>
      <div className="container">
        <h1>Array</h1>
        <ol className="list">
          <li>An Array is a linear data Structure.</li>
          <li>An Array is a collection of similar data type.</li>
          <li>
            Arrays are stored at contiguous memory locations
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
        <table>
          <thead>
            <tr>
              <th>Advantage of Java</th>
              <th>Disadvantage of Java</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direct access to elements using index.</td>
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
        <code>int [] rollNumber=new int [size];</code>
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
          <img src={ArrayDeclaration} alt="ArrayExampleCode" onClick={() => openModal(ArrayDeclaration)} style={imgStyle} />
          <img src={ArrayExample} alt="ArrayExampleCode" onClick={() => openModal(ArrayExample)} style={imgStyle} />
        </div>
        <hr />
        {/* Input and Priting Array */}
        <div>
          <h2>Array Printing and taking Input :-</h2>
          <div className="image">
            <img src={AccessingArray} alt="AccessingArrayCode" onClick={() => openModal(AccessingArray)} style={imgStyle} />
            <div className="output-wrapper">
              <div className="output">
                <b>Output:</b>
                <code> 1,2,3,4,5</code>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={AccessingArrayChar} alt="AccessingArrayCharCode" onClick={() => openModal(AccessingArrayChar)} style={imgStyle} />
            <div className="output-wrapper">
              <div className="output">
                <b>Output: </b> <code>a,B,Z,x,p</code>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={ArrayInputSize} alt="ArrayInputSizeCode" onClick={() => openModal(ArrayInputSize)} style={imgStyle} />
            <img src={ForEachLoop} alt="ArrayForEachLoopCode" onClick={() => openModal(ForEachLoop)} style={imgStyle} />
            <img src={ArraystoString} alt="ArraystoStringCode" onClick={() => openModal(ArraystoString)} style={imgStyle} />
            <hr />
            <p className="exception">If try to access element in array above its size it will throw an error  <strong>ArrayIndexOutOfBoundException.</strong></p>
            <div className="image">
              <img src={ArrayException} alt="ArrayException" onClick={() => openModal(ArrayException)} style={imgStyle} />
            </div>
          </div>
        </div>
        <hr />
        <div className="image">
          <img src={ArrayNoneElement} alt="ArryNoneElementCode" onClick={() => openModal(ArrayNoneElement)} style={imgStyle} />
        </div>
        <p>If you have initialized an array and do not insert any element in the
          array and you are trying to print element of array. It will show you 0
          for Int datatype, 0.0 for Float datatype, null for String datatype.</p>
        <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="/array/arraymethod">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
      </div>
    </>
  );
}

export default Array;
