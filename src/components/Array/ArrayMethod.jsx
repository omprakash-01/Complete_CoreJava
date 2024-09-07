import React, {useState} from 'react'
import ArrayMethod1 from '../../assets/Array/ArrayMethod1.png'
import ArrayMethod2 from '../../assets/Array/ArrayMethod2.png'
import { Link } from 'react-router-dom';
import ImageModal from '../ImageModal'; 

function ArrayMethod() {


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
    <div className="ArrayMethod">
        <h1>Array & Method</h1>
        <p>In java Array only by pass by value and it is not passed by reference.</p>
        <p>How to pass an Array in Method</p>
        <p><b>For Example:</b></p>
        <div className="image">
            <img src={ArrayMethod1} alt="ArrayMethodExample" onClick={()=>openModal(ArrayMethod1)} style={imgStyle} />
            <img src ={ArrayMethod2} alt='ArrayMethodExample' onClick={()=> openModal(ArrayMethod2)} style={imgStyle} />
        </div>
        
        <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/array/array">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="">Next Page</Link>
          </div>
        </div>
      </div>
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </div>
      
    </>
  )
}

export default ArrayMethod
