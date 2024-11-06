
import { useState } from 'react';
import './App.css'

function App() {

 let [counter, setCounter] = useState(0)
  
  // let counter = 5;

  const addValue = () => {
    console.log("Value added",  counter);
    // counter = counter + 1;
   
    setCounter(counter)
    
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
  <div>
    <h1>Hello World!</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>
      Add Value {counter}
    </button>
        <br /><br />
    <button onClick={removeValue}>
      Remove Value {counter}
     
    </button>
    <p>Footer: {counter}</p>
  </div>
  )
}

export default App



// UI Updation ko React control karta hai is liye hume Hooks ka use karna padta hai.
