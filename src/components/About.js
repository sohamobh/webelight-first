import React, { useState } from "react"

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })
    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#4a5158" : "white",
        border: "2px solid",
        borderColor: props.mode === "dark" ? "white" : "black",
    }
    const [buttonText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color == "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white",
    //         })
    //         setBtnText("Enable light mode")
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             border: "1px solid black",
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    // }

    return (
        <div
            className="container my-3"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
            <h1 className="container my-3">ABOUT US</h1>
            <div
                className="accordion accordion-flush my-3"
                id="accordionFlushExample"
            >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a very helpful applicaion that nakes it
                            easy for the user to manipulate their text the way
                            they want.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            It is a free application that makes it even more
                            exciting. Anyone and every one can use it from any
                            where and every where
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            <strong>Easy to understand</strong>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is one of the easitest applicaionto use.
                            One can get hands on it very quickly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container my-3">
        //     <button
        //         onClick={toggleStyle}
        //         type="button"
        //         className="btn btn-primary"
        //     >
        //         {buttonText}
        //     </button>
        // </div>
    )
}
