import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <h2>Hi from NavBar</h2>

      <Outlet />
    </>
  )
}
