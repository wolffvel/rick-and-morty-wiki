import React from 'react';
import { Router } from '@reach/router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from './context/ThemeContext';
import { InputProvider } from './context/InputContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Header />
        <InputProvider>
          <Router className='body'>
            <Home path='/' />
            <About path='/about' />
          </Router>
        </InputProvider>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
