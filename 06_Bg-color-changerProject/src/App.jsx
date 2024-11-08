import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
     
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-3xl'>

        <button onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}>
          Red

        </button>

        <button onClick={() => setColor("Green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Green"}}>
          Green

        </button>

        <button onClick={() => setColor("Blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Blue"}}>
          Blue

        </button>

        <button onClick={() => setColor("Purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Purple"}}>
          Purple

        </button>

        <button onClick={() => setColor("Gold")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Gold"}}>
           Gold

        </button>

        <button onClick={() => setColor("Grey")}
         className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Grey"}}>
          Grey

        </button>
         {/* onClick hum se 1 function expect karta hai onClick={setColor}
         ye humne sirf function ka reference diya hai aur aaise dene se hum kabhi us function me parameter pass nahi kar payenge. is liye hame function pass karna hota hai taki hum usme agar parameter pass karna ho to kar paye like onClick{setColor()} 
         onClick ko sirf function hi chahiye wo jo return kar rah ai wo nahi balki poora ka poora function hi chahiye. is liye upar diye gaye function me hum function nahi diye balki jo return huwa hai wo diye hai so final
         hum is tarh se likhte hai onClick{() => setColor("")}*/}
      </div>

     </div>

    </div>
  )
}

export default App
