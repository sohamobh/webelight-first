import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import { useState } from "react"

//new project.. text management
function App() {
    const [mode, setMode] = useState("dark") //whether darkmode is enables or not
    const togglemode = () => {
        if (mode === "light") {
            setMode("dark")
            document.body.style.color = "white"
            document.body.style.backgroundColor = "#212529"
        } else {
            setMode("light")
            document.body.style.color = "black"
            document.body.style.backgroundColor = "white"
        }
    }
    return (
        <>
            <Navbar
                title="TextUtils"
                mode={mode}
                togglemode={togglemode}
            ></Navbar>
            <div className="container my-3">
                <TextForm heading="Enter the text to manipulate"></TextForm>
                <About></About>
            </div>
        </>
    )
}

export default App
