import { useEffect } from 'react'
import GetCurrentLocation from './GetCurrentLocation'
import { Button } from '@mantine/core'

export default function Home({ users }) {

  return (
    <>
      <h1><i>onward</i></h1>
      {/* <GetCurrentLocation /> */}
      <Button>Hi I'm a Mantine Button</Button>
    </>
  )
}
