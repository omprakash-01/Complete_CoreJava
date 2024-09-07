import React,{useState} from 'react';
import './Introduction.css';
import { Link } from 'react-router-dom';
import Translator from '../../assets/Introduction/Translator.png'
import ImageModal from '../ImageModal';
import FlowChart from '../../assets/Introduction/FlowChart.png'

function Introduction() {
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
    <div className="container">
      <section>
        <h1>#Introduction</h1>
        <p><strong>Language:</strong> Any medium to communicate is called language.</p>
        <p><strong>Programming language:</strong> A language that is used to communicate with a computer is called programming language</p>
      </section>
      <section>
        <h2>Types of Programming Languages:</h2>
        <ol className="order-list">
          <li>Low-level Programming Language (Binary Language).</li>
          <li>Assembly Language (Mid-level Language).</li>
          <li>High-level Programming Language.</li>
        </ol>
        <h3>Low-level language:</h3>
        <ul className="unorder-list">
          <li>The first programming language used to communicate with a computer is called low-level language.</li>
          <li>Low-level language is in the form of '0' and '1', so it is called <strong>binary language</strong> .</li>
          <li>Low-level language is directly understandable by the computer so there is no need for a translator.</li>
          <li>Low-level is the fastest programming language because the computer understands it directly.</li>
          <li>Low-level is not a user-friendly language.</li>
          <li><strong>Example:</strong>
            <ol className=" order-list">
              <li>Executable code or Binary code</li>
              <li>101</li>
              <li>110</li>
            </ol>
          </li>
        </ul>
        <h3>Assembly Language:</h3>
        <ul className="unorder-list">
          <li>Mid-level language is also known as assembly language.</li>
          <li>Mid-level language is used to fill the gap between human-friendly language and computer-friendly language.</li>
          <li>It is made of some predefined statements, words, and symbols, but such language is also not preferable for a human being.</li>
          <li><strong>Example:</strong>
            <ol className="order-list">
              <li>Byte code</li>
            </ol>
          </li>
        </ul>       
        <h3>High-level language:</h3>
        <ul className="unorder-list">
          <li>High-level is a programming language made up of simple English characters such as (A-Z), (a-z), (0-9), and special symbols (@,#,-,+,&).</li>
          <li>High-level is a human-friendly language because it is very easy for humans to read and write a set of instructions with the help of such a language.</li>
          <li>High-level is not a computer-friendly language, so a translator comes in between and it is responsible for converting the high-level code into machine-understandable code.</li>
          <li><strong>Example:</strong>
            <ol>
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ol>
          </li>
        </ul>
        <div className="image">
          <img src={Translator} alt="Translator" onClick={()=> openModal(Translator)} style={imgStyle}/>
        </div>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Compiler</th>
              <th>Interpreter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compiler is a translator which is responsible for generating one type of code into another type of code.</td>
              <td>Interpreter also acts as a translator which is responsible for converting one type of code into another type of code. The interpreter reads the code line by line (one line at a time).</td>
            </tr>
            <tr>
              <td>Compiler reads the whole code at a time and generates next-level code only if there is no error.</td>
              <td>Interpreter reads the current line and generates the next-level code if there is no error in the current line.</td>
            </tr>
            <td>Main advantage of compiler is fast execution time.</td>
            <td>If error is there interpreter display the error message for the current line and stop the program execution.</td>
            <tr>
              <td>Java compiler name is <strong>JavaC</strong>.</td>
              <td>Java interpreter name is <strong>JVM (Java Virtual Machine)</strong>.</td>
            </tr>
          </tbody>
        </table>
        <div className="programming-paradigms">
        <h2>Programming paradigms:-</h2>
          <p>A programming paradigms is the classifiction, style or way programming. It is an approach to solve problem by using programming language.</p>
          <h3>Procedural programming:</h3>
          <ul className='unorder-list'>
            <li>Procedural programming language praradigm that follow a top-down approach in disign a program.</li>
            <li>A program is structured as a series os procedures also known as routine, function or subroutine.</li>
            <li>These procedures contain set of instruction that are executed in a sequential manner.</li>
            <li><b>Example:</b> C, Basic, Pascal</li>
          </ul>
          <h3>Functional Programming Paradigm:</h3>
          <ol className="order-list">
            <li>Function is chunk of code which so a specfic task.</li>
            <li>In function programming paradigm in which we try to bind everything in pure mathematical function style.</li>
            <li>It main focus is on <q>What to solve</q>.</li>
            <li><b>Example:</b>Scala, Lisp</li>
          </ol>
          <h3>Object Oriented Programming Paradigam:</h3>
          <ul className="unorder-list">
            <li>Object Oriented programming paradigm data is organised in the form of classes and object.</li>
            <li>With help of <q>OOPs</q> we can achieve real world secnario with help of follwing concept <strong>Inheritance,Encasultion, Polymorphism, and Abstraction</strong>.</li>
            <li><b>Example: </b> Java, C++</li>
          </ul>
        </div>
        <p><b>Algorithm:-</b> An algorithm is a step by step procedure to solve logical and mathematical problem.</p>
       <table>
        <thead>
          <tr>
            <th>What is Program?</th>
            <th>What is Programming:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A program is a set instruction that a computer follow in order to perform a particular task.</td>
            <td>Programming is the process of creating a program. It invovle <b>desiging, coding, testing,</b>  and <b>debugging</b> the set of instruction that will be executed by a computer. </td>
          </tr>
        </tbody>
       </table>
       <h3>Application of programming language:</h3>
       <ol className="order-list">
        <li>Creating application and software for various purpose such as <b>Desktop application, Mobile apps, Web Development.</b></li>
        <li>Developing algorithm and model for machine learning and artifical intelligence application.</li>
        <li>Creating video game using programming lanuage and game development framework.</li>
        <li>Developing software for finance modeling, transaction processing, and business management.</li>
       </ol>
       <h3>Flow Chart:</h3>
       <p>A flow chart is graphical representation of a process.</p>
       <div className="image">
        <img src={FlowChart} alt="FlowChart" onClick={()=>openModal(FlowChart)} style={imgStyle} />
       </div>
      </section>
      <hr />
      <div className="btn center">
        <Link to="/java/java">Next Page</Link>
      </div>
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </div>
  );
}

export default Introduction;
