import React from 'react'
import ReactDOM from 'react-dom/client'

import HeroesApp from './HeroesApp'

import './styles.css'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
