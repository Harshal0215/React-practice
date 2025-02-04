import MovieInput from './components/movieInput'
import Movies from './components/Movies'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieInput/>
      <Movies/>
    </>
  )
}

export default App
