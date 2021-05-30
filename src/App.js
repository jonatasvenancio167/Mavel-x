import React, { Component } from 'react';

import HeaderComponents from './components/Header/headerComponents'
import Routes from './routes'

import './styles/global.css'

class App extends Component {

  render() {
    return (
        <main>
          <HeaderComponents/>
          <Routes />
        </main>
    )
  }
}

export default App;
