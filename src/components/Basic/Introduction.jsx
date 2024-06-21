import React from 'react';
import './Introduction.css';
import { Link } from 'react-router-dom';

function Introduction() {
  return (
    <>
    <div className="container">
      
    <section className="Intro">
        <h1>#01 Introduction</h1>
        <p><strong>Language:</strong> Any medium to communicate is called language.</p>
        <p><strong>Programming language:</strong> A language that is used to communicate with a computer is called programming language</p>
      </section>
      <section className="TypesOfLanguages">
        <h2>Types of Programming Languages:</h2>
        <ol className="list">
          <li>Low-level Programming Language (Binary Language).</li>
          <li>Assembly Language (Mid-level Language).</li>
          <li>High-level Programming Language.</li>
        </ol>
        <h2>Low-level language:</h2>
        <ul className="list">
          <li>The first programming language used to communicate with a computer is called low-level language.</li>
          <li>Low-level language is in the form of '0' and '1', so it is called binary language.</li>
          <li>Low-level language is directly understandable by the computer so there is no need for a translator.</li>
          <li>Low-level is the fastest programming language because the computer understands it directly.</li>
          <li>Low-level is not a user-friendly language.</li>
          <li><strong>Example:</strong>
            <ol className="list">
              <li>Executable code or Binary code</li>
              <li>101</li>
              <li>110</li>
            </ol>
          </li>
        </ul>
        <h2>Assembly Language:</h2>
        <ul className="list">
          <li>Mid-level language is also known as assembly language.</li>
          <li>Mid-level language is used to fill the gap between human-friendly language and computer-friendly language.</li>
          <li>It is made of some predefined statements, words, and symbols, but such language is also not preferable for a human being.</li>
          <li><strong>Example:</strong>
            <ol className="list">
              <li>Byte code</li>
            </ol>
          </li>
        </ul>
        <h2>High-level language:</h2>
        <ul className="list">
          <li>High-level is a programming language made up of simple English characters such as (A-Z), (a-z), (0-9), and special symbols (@,#,-,+,&).</li>
          <li>High-level is a human-friendly language because it is very easy for humans to read and write a set of instructions with the help of such a language.</li>
          <li>High-level is not a computer-friendly language, so a translator comes in between and is responsible for converting the high-level code into machine-understandable code.        </li>
          <li><strong>Example:</strong>
            <ol>
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ol>
          </li>
        </ul>
      </section>
      <section className="Translator">
        <table border="2px">
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
          </tbody>
        </table>
      </section>
      <hr />

        <div className="btn center">
          <Link to="/array">Next Page</Link>
        </div>
      
    </div>
    </>
  );
}

export default Introduction;
