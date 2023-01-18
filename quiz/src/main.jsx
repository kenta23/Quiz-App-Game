import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Index from './Index'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         <Index />
    </BrowserRouter>

   
  </React.StrictMode>,
)
