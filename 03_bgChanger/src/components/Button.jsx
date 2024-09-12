import React, { useState } from 'react'

function Button({backgroundColor = "black", rounded = "rounded-none"}) {
    // const [color, setColor] = useState("black")
    document.querySelector("body").style.backgroundColor = "black"
    
    const updatebg = (backgroundColor) => {
        document.querySelector("body").style.backgroundColor = backgroundColor
    };


    const handleClick = () => {
      updatebg(backgroundColor)
    }



  return (
    <>
         <button onClick={handleClick} className={rounded} >{backgroundColor}</button>
    </>
  )
}

export default Button