import React, { useState } from "react"

// console.log(useState('Enter text here2'));

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleSentenceCount = () => {
        // console.log("Lowercase was clicked" + text)
        let count = text.split(".").length
        //return count
        document.write("Total numbers of sentences are = " + count)
        //setText(newText)
    }
    const handleClearText = () => {
        // console.log("Clear was clicked" + text)
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    var num = 0

    const [text, setText] = useState("") //setText is the update function
    // text="new text"; //wrong way
    // setText("New text"); //correct way
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    {/* <label for="MyBox" class="form-label">Example textarea</label> */}
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="MyBox"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1" //mx-1 creates space between 2 components; here, buttons
                    onClick={handleLowClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-1" //mx-1 creates space between 2 components; here, buttons
                    onClick={handleClearText}
                >
                    Clear text
                </button>
                <button
                    className="btn btn-primary mx-1" //mx-1 creates space between 2 components; here, buttons
                    onClick={handleSentenceCount}
                >
                    Sentence Count
                </button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                    {/*number count*/}
                </p>
                <p>
                    {0.008 * text.split(" ").length} minutes reading time.
                    {/*1 word = 0.008 minutes(1/125) multiplied by length*/}
                </p>
                {/*<p>Total number of sentences are:-{handleClearText(num)} </p>*/}

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
