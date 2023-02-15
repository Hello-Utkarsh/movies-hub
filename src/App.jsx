import { useState } from 'react'
import Leftwindow from './component/Leftwindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Leftwindow/>
    </>
  )
}

export default App
