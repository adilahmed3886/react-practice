import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useRef Hook
  const passwordRef = useRef(null)
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,24)
    window.navigator.clipboard.writeText(password)
  }, [password])


  //Password Generator JS:

  //useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=:;,./~`";

    for(let i = 0; i < length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length +1))
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  //useEffect Hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='bg-zinc-900 h-screen w-full flex justify-center p-[4rem]'>
        <div className='bg-green-700 w-[80vw] h-[30vh] rounded-3xl flex  items-center p-[2rem] flex-col'>
          <h1 className='font-bold text-2xl'>Password  Generator</h1>
          <div className='mt-4 flex justify-center'>
              <input type="text"
              className='h-[2rem] w-[40vw] rounded-l-2xl border-none outline-none px-4 py-2'
              placeholder='Password'
              readOnly
              value={password}
              ref={passwordRef}
              />
              <button
              onClick={copyPassword} 
              className='bg-black text-white rounded-r-2xl h-[2rem] w-20'>Copy</button>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
             <div className='flex gap-2'>
                <input type="range" 
                min={8}
                max={24}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className='cursor-pointer rounded-3xl'
                />
                <label className='font-semibold'>Length: {length}</label>
             </div>
             <div className='flex gap-2 justify-center'>
                <input type="checkbox"
                className=''
                id="numberInput"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                />
                <label className='font-semibold'>Numbers</label>
             </div>
             <div className='flex gap-2 justify-center'>
                <input type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
                />
                <label className='font-semibold'>Charachters</label>
             </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
