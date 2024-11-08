import Card from './Components/Card'
import './App.css'

function App() {

  let myObj = {
    username: "Sohail",
    age: 26
  }
  let newArr = [1, 2, 3]
  

  return (
  <div>
   <h1 className='bg-green-500 text-black rounded-lg p-4 mb-4'>Hello Wolrd!</h1>

   <Card username="CodewithRock" btnTxt='click ' />
   <Card username="SohailAkhtar" btnTxt="" />
  </div>
  )
}

export default App
