import React from 'react'

export default function GetCurrentLocation({ handleLocation }) {

  const locationResult = e => {
    // TODO: Add spinner while waiting for this result
    // debugger
    handleLocation(e.coords)
  }

  const getCurrentLocation = () => {
    console.log('🌎Finding location...')
    navigator.geolocation.getCurrentPosition(locationResult)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // debugger
  }

  return (
    <>
      <button onClick={getCurrentLocation}>Find where I am 🗺</button>
      <form onSubmit={handleSubmit}>
        <label>or enter location:
          <input type='text' />
        </label>
        <button type='submit'>Submit Location</button>
      </form>
    </>
  )
}
