import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import { render } from "@testing-library/react"
import ToDo from "./component/ToDo"
import Edit from "./component/Edit"

const App = () => {
    const [inputList, setInputList] = useState("")
    const [newText, setNewText] = useState()
    const [editTodo, setEditTodo] = useState("")
    const [items, setItems] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const handleItems = (event) => {
        setInputList(event.target.value)
    }
    const handleEditTodo = (target, value) => {
        setEditTodo(target.value)
    }
    const editItem = (id) => {
        setIsEdit(true)
        setEditTodo(items[id])
        return (items[id] = editTodo)
    }
    const handleClick = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setInputList("")
        //onclick(setInputList(inputList))
    }
    const deleteItems = (id) => {
        console.log("Deleted")
        setItems((oldItems) => {
            return oldItems.filter((ele, index) => {
                return index !== id
            })
        })
    }
    //const EditItems = (id) => {}
    //     console.log("Edit")
    //     setItems((newText) => {
    //         return setNewText(newText).filter((ele, index) => {
    //             return newText
    //         })
    //     })
    // }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add new items"
                        onChange={handleItems}
                        value={inputList}
                    />
                    <button onClick={handleClick}> + </button>
                    <ol>
                        {items.map((itemVal, index) => {
                            return (
                                <ToDo
                                    key={index}
                                    id={index}
                                    text={itemVal}
                                    onSelect={deleteItems}
                                />
                            )
                        })}
                    </ol>

                    <button
                        type="text"
                        value={editTodo}
                        onChange={handleEditTodo}
                        disabled={inputList.length === 0}
                        className="button_style"
                        onClick={editItem}
                    >
                        Edit
                    </button>
                    {/* // <ol>
                    //     {items.map((itemVal, index) => {
                    //         return (
                    //             <Edit
                    //                 key={index}
                    //                 id={index}
                    //                 text={itemVal}
                    //                 onClick={EditItems}
                    //             />
                    //         )
                    //     })}
                    // </ol>*/}
                </div>
            </div>
        </>
    )
}

export default App
