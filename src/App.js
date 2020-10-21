import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './app/routes'
import { BrowserRouter } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <MessengerCustomerChat
            pageId="2106354106282145"
            appId="842783163198279"
          />
      </div>

    );
  }
}

export default App;
