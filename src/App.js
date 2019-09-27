import React from 'react';
import { Router } from '@reach/router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider style={{ backgrondColor: 'blue' }}>
        <Header />
        <Router className='body'>
          <Home path='/' />
          <About path='/about' />
        </Router>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
