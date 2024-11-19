import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import Draggable from "react-draggable";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Outlet />
     </>
  )
}

export default App
