import React from 'react';
import { Router } from '@reach/router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
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
      <Header />
      <Router className='body'>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
