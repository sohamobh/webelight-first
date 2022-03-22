import { Button, HStack, Input, useToast } from "@chakra-ui/react"
import { useState } from "react"
import React from "react"
import { nanoid } from "nanoid"

function AddToDo({ addTodo }) {
    const toast = useToast()
    function handleSubmit(e) {
        e.preventDefault()
        if (!content) {
            toast({
                title: "No Content",
                status: "error",
                duration: 2000,
                isClosable: true,
            })
        } else {
            console.log(content)
            const todo = {
                id: nanoid(),
                body: content,
            }
            addTodo(todo)
            setContent("")
        }
    }
    const [content, setContent] = useState("")
    return (
        <form onSubmit={handleSubmit}>
            <HStack mt={8}>
                <Input
                    variant="filled"
                    placeholder="Add items"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button colorScheme="pink" px={8} type="submit">
                    Add
                </Button>
            </HStack>
        </form>
    )
}

export default AddToDo
