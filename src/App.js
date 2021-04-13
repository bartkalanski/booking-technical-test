import React from 'react'

import "./App.scss"
import Header from './components/Header'
import Title from './components/Title'
import SearchBox from './components/SearchBox'


const App = () => {
  return (
    <div className="app">
    <Header/>
    <Title/>
    <SearchBox/>
    </div>
  )
}

export default App
