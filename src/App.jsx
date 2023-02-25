import { useState } from 'react'
import Leftwindow from './component/Leftwindow'
import Rightwindow from './component/Rightwindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Leftwindow />
      <Rightwindow />
    </div>
  )
}

export default App
