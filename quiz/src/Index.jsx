import React from 'react'
import Home from './Home'
import App from './App'
import {Routes, Route } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <Home />
      <Routes>
            <Route path='play' element={<App />}/>
      </Routes>
    </div>
  )
}

export default Index
