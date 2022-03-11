import React from "react"

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: "50px" }}>
            {props.alert && (
                <div
                    //props.alert will work as if here, if its null, the later code wont be executed, else it will be executed
                    //this happens because all the jsx will be converted to javascritpt calls
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                >
                    <strong>{capitalize(props.alert.type)}</strong>:
                    {props.alert.msg}
                    {/*<button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>*/}
                </div>
            )}
        </div>
    )
}
