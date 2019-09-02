import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />
      <Router className='body'>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
    </>
  );
}

export default App;
