import { useEffect } from 'react'
import GetCurrentLocation from './GetCurrentLocation'
// import { Button } from '@mantine/core'

export default function Home({ users, handleLocation }) {

  return (
    <>
      <h1><i>onward</i></h1>
      <GetCurrentLocation handleLocation={handleLocation} />
      {/* <Button>Hi I'm a Mantine Button</Button> */}
    </>
  )
}
