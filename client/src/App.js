import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import NoMatch from './NoMatch'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/hello')
      .then(r => r.json())
      .then(data => setCount(data.count))
  }, [])

  return (
    <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='testing' element={<h1>Test Route</h1>} />

          <Route path='*' element={<NoMatch />} />
        </Route>
    </Routes>
  )
}
