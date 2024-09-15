import React, { useState } from 'react'

function Button({backgroundColor = "black", rounded = "rounded-none", color = "white"}) {


    const backgroundRef = document.querySelector("body")
    const h1Ref = document.querySelector("h1")

    backgroundRef.style.backgroundColor = "black"
    
    const updatebg = (backgroundColor) => {
        backgroundRef.style.backgroundColor = backgroundColor
    };


    const handleClick = () => {
      updatebg(backgroundColor)
      

      if(["BLACK", "BLUE", "PURPLE", "GRAY", "OLIVE"].includes(backgroundColor)){
        h1Ref.style.color = "white"
      }else{
        h1Ref.style.color = "black"
      }
    }



  return (
    <>
         <button onClick={handleClick} className={rounded} >{backgroundColor}</button>
    </>
  )
}

export default Button