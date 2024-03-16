import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ClassCom from './ClassCom'
import FunctionComp from './functionComp';
import SetState from './SetState';
import SingleFormHandle from './SingleFormHandle';
import NameSingleFormHandle from './NameSingleFormHandle';
import MultipleFormHandle from './MultipleFormHandle';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <MultipleFormHandle/>
    </>
  )
}

export default App
