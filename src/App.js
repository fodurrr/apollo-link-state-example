import React from 'react';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

import client from './apollo/apolloClient';

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          React, Apollo Client local state management example
        </h1>
      </header>
      <Home />
      <Footer />
    </div>
  </ApolloProvider>
);

export default App;
