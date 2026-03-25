import { useState } from 'react'
import Square from './square'

import './App.css'
import Board from './board'


function App() {
  localStorage.setItem("count", 0)
  return (
    <Board />
  )
}

export default App
