import { useState } from 'react'

function App() {
  const [color, setColor] = useState("skyblue")

  return (
      <div className="w-screen h-screen duration-200"
       style={{backgroundColor: color}}>

        <h1 className=" text-center py-5">Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
         
         <div className="flex flex-wrap justify-center 
             gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
              <button
              onClick={()=>setColor("red")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "red"}}>Red
              </button>
              <button 
               onClick={()=>setColor("green")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "Green"}}>Green
              </button>
              <button 
               onClick={()=>setColor("blue")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "blue"}}>Blue
              </button>
              <button
               onClick={()=>setColor("yellow")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "yellow"}}>Yellow
              </button>
              <button 
               onClick={()=>setColor("brown")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "brown"}}>Brown
              </button>
              <button
               onClick={()=>setColor("purple")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "purple"}}>Purple
              </button>
              <button
               onClick={()=>setColor("olive")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl" 
                style={{backgroundColor: "olive"}}>Olive
              </button>
         </div>
        </div>
       </div>
  )
}

export default App
