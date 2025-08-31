
import { useState } from 'react'
import './App.css'

function App() {
const [color, setcolor] = useState("olive")
  return (
    <>
   <div className='w-full h-screen justify-center fixed flex flex-wrap'
   style={{backgroundColor:color}}>
    <div className='fixed bottom-12 px-6 py-3 flex flex-wrap text-white 
    shadow-lg rounded-full gap-12 bg-black/40'>
    <button className='px-10 py-3 text-xl outline-none rounded-full bg-red-500'
    onClick={()=>setcolor("red")}>red</button>
     <button className='px-9 py-3 text-xl outline-none rounded-full bg-green-500'
     onClick={()=>setcolor("green")}>green</button>
     <button className='px-10 py-3 text-xl outline-none rounded-full bg-blue-500'
     onClick={()=>setcolor("blue")}>blue</button>
     <button className='px-8 py-3 text-xl outline-none rounded-full bg-orange-500'
     onClick={()=>setcolor("orange")}>orange</button>
     <button className='px-10 py-3 text-xl outline-none rounded-full bg-pink-500'
     onClick={()=>setcolor("pink")}>pink</button>
     <button className='px-10 py-3 text-xl outline-none rounded-full bg-yellow-500'
     onClick={()=>setcolor("yellow")}>yellow</button>
    </div>
   </div>
    </>
  )
}

export default App
