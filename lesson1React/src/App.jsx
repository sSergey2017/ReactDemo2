import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import SimpleCalculator from './SimpleCalculator/SimpleCalculator'
import DataCurrent from './DateCurrent/DataCurrent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header/>
    Test
    <DataCurrent />
    <SimpleCalculator/>
   </div>
  )
}

export default App
