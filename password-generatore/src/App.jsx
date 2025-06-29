import { useCallback, useEffect, useState ,useRef} from 'react'
import './index.css'

function App() {
  let [length,setlength] = useState(8)
  let [characterallow,setcharacterallow]=useState(false)
   let [numberallow,setnumberallow]=useState(false)
   let [Password,setpassword]=useState("")

   const passwordGeneratore=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberallow)  str +="0123456789"
    if (characterallow)  str +="!@#$%^&*()_+<>?"

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length+1)
      pass +=str.charAt(char)
      
    }
    setpassword(pass)
   },[length,characterallow,numberallow])

   const passwordRef=useRef(null)

   const copyPasswordToClipboard=useCallback(()=>{
    
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(Password)
    window.navigator.clipboard.writeText(Password)
   },[Password])

   useEffect(()=>{
    passwordGeneratore()
   },[length,characterallow , numberallow])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
  <h1 className='text-white text-center text-xl font-semibold mb-4'>Password Generator</h1>

  <div className='flex items-center gap-2'>
    <input 
      type="text" 
      value={Password}
      className='outline-none py-2 px-3 w-full bg-white rounded-md text-gray-700'
      placeholder='Password'
      readOnly
      ref={passwordRef}
    />

    <button
    onClick={copyPasswordToClipboard} 
      className='bg-blue-600  hover:bg-green-500 text-white px-4 py-2 rounded-md transition duration-200 '>
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex item-center gap-x-1'>
      <input 
      type='range'
      min={8}
      max={100}
      value={length}
      className='cursore-pointer'

      onChange={(e)=>{setlength(e.target.value)}}
      
      />
      <label >length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberallow}
      id="numberinput"
      onChange={(e)=>{
        setnumberallow((prev)=>
        !prev)
      }}
      />
      <label >Number</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={characterallow}
      id="characterinput"
      onChange={(e)=>{
        setcharacterallow((prev)=>
        !prev)
      }}
      />
      <label >character</label>
    </div>
     </div>
</div>
</>
  )
}

export default App
