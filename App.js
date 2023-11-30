import { useState, React } from 'react';
import { ReactDOM } from 'react-dom';


// custom components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />


    </div>
  );
}




