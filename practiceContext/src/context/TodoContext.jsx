import {TodoContext, TodoProvider , useTodo} from './context'

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    return (
        <TodoProvider value={{todo: todos, setTodos}}>
            {children}
        </TodoProvider>
    )
}