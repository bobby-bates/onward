import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <h1>Hi from NavBar</h1>

      <Outlet />
    </>
  )
}