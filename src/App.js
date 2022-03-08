import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

//new project.. text management
function App() {
    return (
        <>
            <Navbar title="TextUtils"></Navbar>
            <div className="=container mb-3">
                <TextForm heading="Enter the text to manipulate"></TextForm>
            </div>
        </>
    )
}

export default App
