import React, {useState} from 'react'
import JavaStructureCode from '../../assets/Java/JavaStructureCode.png';
import JVM from '../../assets/Java/JVM.jpg'
import JRE from '../../assets/Java/JRE.jpg';
import JDK from '../../assets/Java/JDK.jpg';
import JavaStructure from '../../assets/Java/JavaStructure.jpg';
import ImageModal from '../ImageModal';
import { Link } from 'react-router-dom';


function Java() {
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
        <h1>#Java</h1>
        <ul className="unorder-list">
            <li>Java is a high-level, object oriented programming, secure and platform independent programming language.</li>
            <li>Java is a user friendly lanugage and it is easy to learn and understand.</li>
            <li>Java is develop by <strong>James Gosling </strong> under <strong>Sun MicroSystem</strong> in earlier 90'<sup>s</sup> Bue in 2010 orcale overtook sum microsystem so java come under oracle company.</li>
            <li>Java follow <b>WORA</b> priciple means'<sup>s</sup> <strong>Write one'<sup>s</sup> Run Any where</strong>.</li>
        </ul>
        <h2>Some famous Java Version</h2>
        <ol className="order-list">
            <li>Java 1.8</li>
            <li>Java 11</li>
            <li>Java 17</li>
        </ol>
        <h2>Characterstic of java</h2>
        <ul className="unorder-list">
            <li>Java is purely object oriented programming language.</li>
            <li>Java is platform independent.</li>
            <li>Java automatically manage memory, preventing memory leak. It also has strong error-checking and handling machinisms.</li>
            <li>Java has built in security feature to protect against malicious code and unauthorized access.</li>
            <li>Java application can communicate & share resource across different machines.</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Java</th>
                    <th>C++</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Java is a compiled and interpreted based language.</td>
                    <td>C++ is a compiled based language.</td>
                </tr>
                <tr>
                    <td>Java is platform independent language.</td>
                    <td>C++ is platform dependent language.</td>
                </tr>
                <tr>
                    <td>Java do not support pointer.</td>
                    <td>C++ support pointer.</td>
                </tr>
                <tr>
                    <td>Java is slower than C++.</td>
                    <td>C++ is faster than java.</td>
                </tr>
                <tr>
                    <td>Java has automatic garbage collection.</td>
                    <td>C++ does not have automatic garbage collection.</td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Compile time error</th>
                    <th>Run time error</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>It occur during the compilation phase.</td>
                    <td>It occur during the execution phase.</td>
                </tr>
                <tr>
                    <td>It occur due to syntax or demantic mistake.</td>
                    <td>It is caused by unexpected situation.</td>
                </tr>
                <tr>
                    <td>Compiler generate error message.</td>
                    <td>Program may crash.</td>
                </tr>
                <tr>
                    <td>Prevent the code from successfully complining.</td>
                    <td>Disrupt the normal flow of the program.</td>
                </tr>
            </tbody>
        </table>
        <h2>How java code execute</h2>
        
        <div className="image">
            <img src="" alt="CodeExecute" />
        </div>
        <h2>More about platform independence</h2>
        <p>It means that byte code can run on all operating system.</p>
        <p>Java is platform independent but JVM is platform dependent.</p>
        <h2>JVM</h2>
        <div className="image">
            <img id='jvm' src={JVM} alt="JVM"  />
        </div>
        <ul className="unorder-list">
            <li>JVM stand for Java Virtual Machine.</li>
            <li>JVM has so many component which are responsible for convert byte code into machine understandable code.</li>
        </ul>
        <h2>JRE</h2>
        <div className="image">
            <img id='jre' src={JRE} alt="JRE" />
        </div>
        <ol className="order-list">
            <li>JRE stand for Java Runtime environment.</li>
            <li>JRE provides an environment where programmer can run java application.</li>
            <li>JRE is an installable file.</li>
            <li>JRE is needed by end user.</li>
        </ol>
        <div className="image">
            <img id='jdk' src={JDK} alt="JDK"  />
        </div>
        <ul className="unorder-list">
            <li>JDK stand for java development kit.</li>
            <li>It provide environment to develop and run java program.</li>
        </ul>
        <h2>Structure of java</h2>
        <div className="image">
            <img src={JavaStructureCode} alt="javaStructure" onClick={()=>openModal(JavaStructureCode)} style={imgStyle} />
            <img src={JavaStructure} id='javastructure' alt="" />
        </div>
        
        <p><b>Class: </b> Class name is a name group of property and method.</p>
        <table>
            <thead>
                <tr>
                    <th>Access Modifier </th>
                    <th>Visibility</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>public</td>
                    <td>Accessible from anywhere</td>
                </tr>
                <tr>
                    <td>private</td>
                    <td>Accessible only within class.</td>
                </tr>
                <tr>
                    <td>protected</td>
                    <td>Accessible within class and subclasses.</td>
                </tr>
                <tr>
                    <td>Default (no keyword)</td>
                    <td>Accessible within package.</td>
                </tr>
            </tbody>
        </table>
        <h2>keyword:</h2>
        <ul className="unorder-list">
            <li>Keyword the predefine, compiler aware and reserved word.</li>
            <li>All keyword are present in lower case and every keyword has an specific meaning.</li>
        </ul>
        <h2>main:</h2>
        <ol className="order-list">
            <li>It is a keyword.</li>
            <li>It is the entry point of java programming.</li>
            <li>If main is not there program will not run.</li>
        </ol>
        <p><b>Package:</b> It is a folder where java program are present. It is written in lower case.</p>
        <p><b>Varibale: </b> It is a block of memory or container which is used to store some data.</p>
        <div className="identifier">
            <h2>Identifier:</h2>
            <p>Identifer are the names provider by the programmer for a class, method, variable, and other component.</p>
            <h3>Rule for identifier:</h3>
            <ul className='unorder-list'>
                <li>An identifier can includes uppercase <b>(A-Z)</b>, lowercase <b>(a-z)</b>, digit <b>(0-9)</b> and specifi symbol <b>& </b> and underscodre (<b> _ </b>) .</li>
                <li>An identifier must not start with a number.</li>
                <li>An identifier must not includes the space.</li>
                <li>A keyword should not use as an identifier.</li>
            </ul>
            <h3>Convention for class name:</h3>
            <ol className="order-list">
                <li>If class name has single word then first letter of this word should in capital and rest of the letter should be in lowercase. <br />
                <b>Example: </b> Test, Demo</li>
                <li>If a class name has multiple word then first letter of each word should be in capital and rest of the letter in lower case.
                <br />
                <b>Example:</b> PrimeNumber, SumOfArrayElement</li>
            </ol>
            <h3>Convention for method and varibale name:</h3>
            <ul className="order-list">
                <li>If a method name has single word then this word should be written in small letter with parenthesis. () <br /> <b>Example:</b> even(), sum()</li>
                <li>If a method name has multiple word then first word should be written in small letter from the second word first letter of each word should be in capital and  rest of letter should in small letter with parenthesis (). <br /> <b>Example: </b> findOutEvenNumber()</li>
                <li>Convention for vraibale neme are same as methos name but variable name should written without parenthesis.</li>
            </ul>
        </div>
        <hr />
        <div className="btn-container">
          <div className='btn'>
            <Link to="/">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="/java/literals">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
       

    </div>
    </>
  )
}

export default Java
