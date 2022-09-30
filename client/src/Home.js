import { useEffect } from 'react'
import GetCurrentLocation from './GetCurrentLocation'

export default function Home({ users }) {

  return (
    <>
      <h1><i>onward</i></h1>
      <GetCurrentLocation />
    </>
  )
}
