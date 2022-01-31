import React from "react";
import axios from "axios";
import useRequest from "./hooks/useRequest";


const App = () => {
    const fetchTodos = () => {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    };

    const [todos, loading, error] = useRequest(fetchTodos);

    if (loading) return <h1>loading...</h1>
    if (error) return <h1>error</h1>

    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: "2px solid black"}}>
                    {todo.id} {todo.title}
                </div>
            )}
        </div>
    );
};

export default App;
