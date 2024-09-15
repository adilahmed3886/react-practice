import { useState, useRef } from "react";
// import Button from "./components/Button"
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  const [h1Color, setH1Color] = useState("white")


  const colorChange = (newColor) => {
    setColor(newColor)

    if (["black", "blue", "purple", "gray", "olive"].includes(newColor)) {
      setH1Color("white");
    } else {
      setH1Color("black");
    }

  };
  return (
    <>
      {/* <h1 className='mb-[65vh] text-2xl mt-20 font-bold text-white'>Background Color Changer</h1>
        <div className='Buttons mb-10 h-screen w-[100vw]'>
          <Button backgroundColor = "RED" rounded="rounded-l-full"/>
          <Button backgroundColor = "GREEN"/>
          <Button backgroundColor = "BLUE"/>
          <Button backgroundColor = "OLIVE"/>
          <Button backgroundColor = "GRAY"/>
          <Button backgroundColor = "YELLOW"/>
          <Button backgroundColor = "PINK"/>
          <Button backgroundColor = "PURPLE"/>
          <Button backgroundColor = "LAVENDER"/>
          <Button backgroundColor = "WHITE"/>
          <Button backgroundColor = "BLACK" rounded='rounded-r-full'/>
        </div> */}

    <div style={{backgroundColor: color, transition: "all 0.3s ease"}} className="h-screen w-[100vw] flex flex-col align-center justify-center">
      <h1 style={{color: h1Color}} className="mb-[65vh] text-2xl text-black font-bold">Background Color Changer</h1>
      <div
        className="mb-10"
      >
        <button
          className="rounded-l-full"
          value="red"
          onClick={() => colorChange("red")}
        >
          RED
        </button>
        <button value="green" onClick={() => colorChange("green")}>
          GREEN
        </button>
        <button value="blue" onClick={() => colorChange("blue")}>
          BLUE
        </button>
        <button value="olive" onClick={() => colorChange("olive")}>
          OLIVE
        </button>
        <button value="gray" onClick={() => colorChange("gray")}>
          GRAY
        </button>
        <button value="yellow" onClick={() => colorChange("yellow")}>
          YELLOW
        </button>
        <button value="pink" onClick={() => colorChange("pink")}>
          PINK
        </button>
        <button value="purple" onClick={() => colorChange("purple")}>
          PURPLE
        </button>
        <button value="lavender" onClick={() => colorChange("lavender")}>
          LAVENDER
        </button>
        <button value="lavender" onClick={() => colorChange("black")}>
          BLACK
        </button>
        <button
          className="rounded-r-full"
          value="white"
          onClick={() => colorChange("white")}
        >
          WHITE
        </button>
      </div>
      </div>
    </>
  );
}

export default App;



