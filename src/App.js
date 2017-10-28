import React, { Component } from 'react'
import { Footer } from './Footer'
import { Product } from './Product'
import { Content } from './Content'
import { Header } from './Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Content/>
        <Product/>
        <Footer/>
      </div>
    )
  }
}

export default App
