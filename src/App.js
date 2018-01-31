import React from 'react';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

import client from './apollo/apolloClient';

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to my basic React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Footer />
    </div>
  </ApolloProvider>
);

export default App;
