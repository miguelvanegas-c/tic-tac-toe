
import './App.css'
import Board from './components/board'


function App() {
  localStorage.setItem("count", 0)
  return (
    <Board />
  )
}

export default App
