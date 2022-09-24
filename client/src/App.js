import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/hello')
      .then(r => r.json())
      .then(data => setCount(data.count))
  }, [])

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  )
}
