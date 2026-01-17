import { useState } from 'react'
import DynamicComponent from './component/dynamic-component'
import Random from './component/reusable-component/random';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DynamicComponent/> */}

      {/* reusable component */}
      <Random/>
      <Random/>
        
      <Random/>
      <Random/>

    </>
  )
}

export default App
