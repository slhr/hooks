import React, {useRef, useState} from "react";
import useScroll from "../hooks/useScroll";

const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);

    const limit = 20;

    const parentRef = useRef();
    const childRef = useRef();

    const fetchTodos = (page, limit) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            });
    };

    useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    return (
        <div ref={parentRef} style={{height: "100vh", overflow: "auto"}}>
            {todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: "2px solid black"}}>
                    {todo.id} {todo.title}
                </div>
            )}
            <div ref={childRef} style={{height: 10}}/>
        </div>
    );
};

export default List;