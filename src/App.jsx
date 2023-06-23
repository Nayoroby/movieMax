import React from 'react'
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom'
import Home from '../src/pages/home/home'
import FilmInfo from '../src/pages/filmInfo/FilmInfo'
import Search from '../src/pages/search/Search'
import Favorites from './pages/favorites/favorites'

function App() {



  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/filmInfo' element={<FilmInfo/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/favorites' element={<Favorites/>} />
    </Routes>
  )
}

export default App
