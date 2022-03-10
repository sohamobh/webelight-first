import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import { useState } from "react"
import Alert from "./components/Alert"

//new project.. text management
function App() {
    const [mode, setMode] = useState("light") //whether darkmode is enabled or not
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        //type is the type of Alert amongst warning, success, danger and Alert
        setAlert({ msg: message, type: type })
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }
    // const togglemodeB = () => {
    //     if (mode === "light") {
    //         setMode("blue")
    //         document.body.style.color = "white"
    //         document.body.style.backgroundColor = "#4169e1"
    //         showAlert(" Blue mode has been enabled", "success")
    //     } else {
    //         setMode("light")
    //         document.body.style.color = "black"
    //         document.body.style.backgroundColor = "white"
    //         showAlert(" Light mode has been enabled", "success") //you cannot capitalize here to get desired output
    //     }
    // }
    const togglemode = () => {
        if (mode === "light") {
            setMode("dark")
            document.body.style.color = "white"
            document.body.style.backgroundColor = "#212529"
            showAlert(" Dark mode has been enabled", "success")
            document.title = "TextUtils | Dark mode"
            setInterval(() => {
                document.title = "TextUtils is amazing!!"
            }, 2000)
            setInterval(() => {
                document.title = "Install TextUtils now!!"
            }, 1500)
        } else {
            setMode("light")
            document.body.style.color = "black"
            document.body.style.backgroundColor = "white"
            showAlert(" Light mode has been enabled", "success")
            document.title = "TextUtils | Light mode"
            setInterval(() => {
                document.title = "TextUtils is amazing!!"
            }, 2000)
            setInterval(() => {
                document.title = "Install TextUtils now!!"
            }, 1500)
        }
    }
    return (
        <>
            <Navbar
                title="TextUtils"
                mode={mode}
                togglemode={togglemode}
            ></Navbar>
            <Alert alert={alert}></Alert>
            <div className="container my-3">
                <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to manipulate"
                    mode={mode}
                ></TextForm>
                <About></About>
            </div>
        </>
    )
}

export default App
