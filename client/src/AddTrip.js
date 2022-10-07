import React from 'react'

export default function AddTrip() {

  const handleSubmit = e => {
    
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Add Trip:
          {/* Date start */}
          {/* Date end */}
          <input type='text' />
          <input type='textarea' />
        </label>
        <button type='submit'>Submit Trip</button>
      </form>
  )
}
