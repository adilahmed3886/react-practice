import react from 'react'

export const TodoContext = React.createContext({
    todo: [
        id: 1,
        text: 'todo text',
        completed: false
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return React.useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
