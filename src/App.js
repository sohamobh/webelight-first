import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"

//new project.. text management
function App() {
    return (
        <>
            <Navbar title="TextUtils"></Navbar>
            <div className="=container my-3">
                {/* <TextForm heading="Enter the text to manipulate"></TextForm>*/}
                <About></About>
            </div>
        </>
    )
}

export default App
