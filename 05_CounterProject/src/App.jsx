import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {

    //counter = counter + 1
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
 
     
    // setCounter ke ander 1 cllback function milta hai setCounter((prevCounter) => {} )


    // setCounter(prevCounter => prevCounter + 1)
    // curlybraces {} remove huwa hai is liye return keyword likhne ki koi jaroorat nhi hai. yha name hum counter bhi le sakte hai.
    
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Hello World!</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button> 
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>
  </>
  )
}

export default App
