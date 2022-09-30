import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import SignUp from './SignUp'
import SignIn from './SignIn'
import MyTrips from './MyTrips'
import AllTrips from './AllTrips'
import NoMatch from './NoMatch'

export default function App() {
  const [users, setUsers] = useState([])
  const [locations, setLocations] = useState([])
  const [trips, setTrips] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/users')
      .then(r => r.json())
      .then(theUsers => {
        setUsers(theUsers)
      })

      fetch('/locations')
      .then(r => r.json())
      .then(theLocations => {
        setLocations(theLocations)
      })

      fetch('/trips')
      .then(r => r.json())
      .then(theTrips => {
        setTrips(theTrips)
      })
  }, [])

  const handleLocation = coords => {
    // debugger
    setCurrentUser({ ...currentUser, coords: coords })
  }
  console.log('currentUser: ', currentUser)

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home users={users} handleLocation={handleLocation} />} />
        <Route path='testing' element={<h1>Test Route</h1>} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='my-trips' element={<MyTrips />} />
        <Route path='all-trips' element={<AllTrips locations={locations} trips={trips} />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
