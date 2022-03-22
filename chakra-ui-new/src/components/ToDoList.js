import React from "react"
import {
    HStack,
    VStack,
    Text,
    IconButton,
    StackDivider,
    Spacer,
    Badge,
} from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

function ToDoList({ todos, deleteTodo }) {
    if (!todos.length) {
        return (
            <Badge colorScheme="green" p={4} m={4} borderRadius="lg">
                No ToDos, Yayy!!
            </Badge>
        )
    }
    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            padding={4}
            borderRadius="lg"
            width="100%"
            maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
            alignItems="stretch"
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer></Spacer>
                    <IconButton
                        icon={<FaTrash />}
                        isRound="true"
                        onClick={() => deleteTodo(todo.id)}
                    ></IconButton>
                </HStack>
            ))}
        </VStack>
    )
}

export default ToDoList
