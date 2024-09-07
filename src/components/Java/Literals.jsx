import React,{useState} from 'react'
import ByteliteralsCode from '../../assets/Java/ByteliteralsCode.png'
import ImageModal from '../ImageModal';
import JavaLiteralsCode from '../../assets/Java/JavaLiteralsCode.png';
import { Link } from 'react-router-dom';
import JavaInitializationDeclaration from '../../assets/Java/JavaInitializationDeclaration.png'

function Literals() {
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
      <h1>#Literals</h1>
      <p>Literals are the important information or the data of real world entity needed by a programmer to write down the set of instruction in known as literals.</p>
      <p><b>Data Types: </b> is a concept which divides the data or literals on the basis of the data and size of the data.</p>
      <table>
        <thead>
          <tr>
            <th>Primitive literals</th>
            <th>Non-Primitive literals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primitive literals directly hold the value.</td>
            <td>Non-primitive literals hold a reference to an object.</td>
          </tr>
          <tr>
            <td>Primitive literals are stored on the stack memory.</td>
            <td>Non-primitive literals are stored in the heap memory.</td>
          </tr>
          <tr>
            <td>The size of primitive type is fixed.</td>
            <td>The size of non-primitive types can vary depending on the object and the number of element in the array.</td>
          </tr>
          <tr>
            <td>It is single value literals.</td>
            <td>It is multivalue literals.</td>
          </tr>
          <tr>
            <td>byte, short, int, long, float, double, char, boolean</td>
            <td>Array, Vector, String</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>DataType</th>
            <th>Size</th>
            <th>Bites</th>
            <th>Range</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>byte</td>
            <td>1 byte</td>
            <td>8 bites</td>
            <td>-128 to 127</td>
            <td><div className="image">
              <img src={ByteliteralsCode} alt="ByteliteralsCode" onClick={()=>openModal(ByteliteralsCode)}  style={{cursor:'pointer'}}/>
            </div></td>
          </tr>
          <tr>
            <td>short</td>
            <td>2 bytes</td>
            <td>16 bites</td>
            <td>-32768 to 32767</td>
            <td rowSpan={7}>
            <div className="image">
              <img src={JavaLiteralsCode} alt="JavaLiteralsCode.png" onClick={()=> openModal(JavaLiteralsCode)} style={{cursor:'pointer'}} />
            </div>
            </td>
          </tr>
          <tr>
            <td>int </td>
            <td>4 bytes</td>
            <td>32 bites</td>
            <td>-2,147,483,648 to 2,147,483,647</td>
          </tr>
          <tr>
            <td>long </td>
            <td>8 bytes</td>
            <td>64 bites</td>
            <td>-9,223,372,036, 854,775,808 to 9,223,372,036, 854,775,807</td>
          </tr>
          <tr>
            <td>float</td>
            <td>4 bytes</td>
            <td>32 bites</td>
            <td>6-7 significant decimal digits</td>
          </tr>
          <tr>
            <td>double</td>
            <td>8 bytes</td>
            <td>64 bites</td>
            <td>15 significant decimal digits</td>
          </tr>
          <tr>
            <td>char</td>
            <td>2 bytes</td>
            <td>16 bites</td>
            <td>0 to 655535</td>
          </tr>
          <tr>
            <td>boolean</td>
            <td></td>
            <td>1 bites</td>
            <td>true, false</td>
          </tr>
        </tbody>
      </table>
      <div className="note">
      <h3>Notes:</h3>
        <ul className="unorder-list">
          <li>Char values in C++ is  1 bytes because it use ASCII value.</li>
          <li>Char values in java is 2 bytes because it use unicode value & ASCII value.</li>
          <li>In java by default <q>double</q> is set for decimal data type.</li>
        </ul>
      </div>
      <div className="char">
        <h2>ASSCII</h2>
        <ul className='unorder-list'>
          <li>ASCII stand for American standard code for information interchange.</li>
          <li>ASCII can respresent only english character for each and every character.</li>
          <li><b>Example: </b>
          <ol className="order-list">
            <li>'A' - 65 to 'Z' - 90</li>
            <li>'a' - 97 to 'z' - 122</li>
            <li>0 - 48 </li>
            <li>space - 32</li>
          </ol>
          </li>
        </ul>
        <h2>Unicode</h2>
        <ul className="unorder-list">
          <li>Unicode is a universal character set that can be respresent a unique value present in all the lanuage of the universe.</li>
          <li>It also support ASCII value.</li>
        </ul>
      </div>
      <h2>Variables:</h2>
        <ol className="order-list">
          <li>Variable is a container that is used to store literals/data/value.</li>
          <li>A variable can store any kind of data or literals (primitive and non-primitive).</li>
          <li>Whenever we declare a variable we can write the declaration only one  but we initialization a variable multiple items in a program.</li>
        </ol>
        <table>
          <thead>
            <tr>
              <th>Local Varisble</th>
              <th>Global Variable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A variable which is declare inside by method block, contractor block, or block is known as local varibale.</td>
              <td>The variable which is declare directly inside the class block but outside the method or any other block is known as global varible.</td>
            </tr>
            <tr>
              <td>A local variable is visible only inside the block where it is declare.</td>
              <td>A global variable is accessible inside the same class as well as outside the class.</td>
            </tr>
            <tr>
              <td>Local variable don't have default value.</td>
              <td>Global variable have default value.</td>
            </tr>
            <tr>
              <td>It is mandatory to initialized.</td>
              <td>It is not mandatory to initialized. </td>
            </tr>
            <tr>
              <td>We can not use prefix with static keyword.</td>
            </tr>
            <tr>
              <td>We can't use access modifier with local variable.</td>
            </tr>
          </tbody>
        </table>
        <h2>Declaration of a variable:</h2>
        <p>The process of providing the container name with it's data type is know as declaration.</p>
        <p><b>Syntax: </b> DataType VariableName;</p>
        <p><b>Example: </b>int id; float Salary; String name;</p>
        <h2>Initialization of a variable:</h2>
        <p>The process of providing the value or assigning the value to already declare variable is know as initialization.</p>
        <p><b>Syntax: </b>DataType VariableName=value;</p>
        <p><b>Example: </b>int id=101, salary=50000, String name="Java"</p>
        <div className="image">
          <img src={JavaInitializationDeclaration} alt="JavaInitializationDeclaration" onClick={()=>openModal(JavaInitializationDeclaration)} style={{cursor:'pointer'}}/>
        </div>
      <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/java/java">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="">Next Page</Link>
          </div>
        </div>
     
    </div>
    <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </>
  )
}

export default Literals
