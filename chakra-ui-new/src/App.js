import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ToDoList from "./components/ToDoList"
import AddToDo from "./components/AddToDo"
import { VStack, IconButton, useColorMode } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useState } from "react"

function App() {
    const initialTodos = [
        {
            id: 1,
            body: "get bread",
        },
        {
            id: 2,
            body: "get coffee",
        },
    ]
    const [todos, setTodos] = useState(initialTodos)

    function deleteTodo(id) {
        const newTodos = todos.filter((todo) => {
            return todo.id != id
        })
        setTodos(newTodos)
    }

    function addTodo(todo) {
        setTodos([...todos, todo])
    }
    const { colorMode, togColormode } = useColorMode()
    return (
        <VStack padding={4}>
            <IconButton
                icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                isRound="true"
                size="lg"
                alignSelf="flex-end"
                onClick={togColormode}
            />
            <Heading
                mb="8"
                fontWeight="extrabold"
                size="2xl"
                bgGradient={"linear(to-r, pink.500, pink.300, blue.500)"}
                bgClip="text"
            >
                ToDo Application
            </Heading>
            <ToDoList todos={todos} deleteTodo={deleteTodo} />
            <AddToDo addTodo={addTodo} />
        </VStack>
    )
}

export default App
