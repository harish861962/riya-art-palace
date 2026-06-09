import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import States from './component/States'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Hero/>
  <States/>
    </>
  )
}

export default App
