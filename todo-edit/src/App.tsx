import React, { useState } from "react"
import "./App.css"
import InputField from "./component/InputField"
import TodoList from "./component/TodoList"
import { Todo } from "./model"
import "./index.css"

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([]) //this todo contains all the ToDos (all the items)

    const handleAdd = (e: React.FormEvent) => {
        //this function takes an event from onsubmit
        e.preventDefault()
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: true }])
            setTodo("")
        }
    }
    console.log(todos)
    return (
        <>
            <div className="App">
                <div className="heading">ToDo</div>
                <div>
                    <InputField
                        todo={todo}
                        setTodo={setTodo}
                        handleAdd={handleAdd}
                    />

                    {/* {todos.map((t) => (
                        <li>{t.todo}</li>
                    ))} */}

                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
            </div>
        </>
    )
}

export default App
