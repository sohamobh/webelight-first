import React from "react"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    //const InputField = ({ todo, setTodo }: Props) => {
    return (
        <div>
            <form className="input_box" onSubmit={(e) => handleAdd(e)}>
                <input
                    placeholder="Add your task"
                    type="input"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button className="button_style" type="submit">
                    ADD
                </button>
            </form>
        </div>
    )
}

export default InputField
