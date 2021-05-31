import React, { Component } from 'react';

import HeaderComponents from './components/Header/headerComponents'
import Routes from './routes'

import './styles/global.css'

//<sumary>
//    Classe responsável por rendezirar o nosso header e as páginas que vem da rotas  
//</sumary>

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
