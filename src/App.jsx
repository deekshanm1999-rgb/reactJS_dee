// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Hello from './Components/First';
import Bye from './Components/Second';
import Rprop from './Components/ReuseProp';
// import PropArray from './Components/PropArray';
import PropObject from './Components/PropArray';
import AnimalMap  from './Components/AnimalMap';
import Fruits from './Components/FruitArrObj';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Form from './Components/form';
import MultiForm from './Components/MultiForm';
import ChatGpt from './Components/ChatGpt';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  {/* <Hello/>
  <Bye/>
  <Rprop name ='Sandeshuu' phone ='7345377272'/>
   <Rprop name ='Deeksha' phone ='7345377272'/> */}
    {/* <PropArray seatNo = {[1,2,3,4]} /> */}
    {/* <PropObject Myobject = {{NAME:'John',phone:7345377272,number:22,seats:4}}/>
    <AnimalMap  animals/> */}
    {/* <Form/> */}
    <ChatGpt/>


  </>
  )
}

export default App
