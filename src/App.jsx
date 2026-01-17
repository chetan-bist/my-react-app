import { useState } from 'react'
import DynamicComponent from './component/dynamic-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicComponent/>
    </>
  )
}

export default App
