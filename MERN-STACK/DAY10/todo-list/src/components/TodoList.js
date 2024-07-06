import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const TodoList = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoTitle, setEditTodoTitle] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            axios.get("http://localhost:5000/todos")
                .then(response => {
                    setTodos(response.data);
                })
                .catch(error => console.error("Error fetching the todos:", error));
        }
    }, [isLoggedIn]);

    const addTodo = () => {
        const todo = { title: newTodo, completed: false };
        axios.post("http://localhost:5000/todos", todo)
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo("");
            })
            .catch(error => console.error("Error adding the todo:", error));
    };

    const startEditTodo = (id, title) => {
        setEditTodoId(id);
        setEditTodoTitle(title);
    };

    const editTodo = () => {
        const updatedTodo = { title: editTodoTitle };
        axios.put(`http://localhost:5000/todos/${editTodoId}`, updatedTodo)
            .then(response => {
                setTodos(todos.map(todo => (todo.id === editTodoId ? response.data : todo)));
                setEditTodoId(null);
                setEditTodoTitle("");
            })
            .catch(error => console.error('Error editing the todo:', error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error("Error deleting the todo:", error));
    };

    if (!isLoggedIn) {
        return <p>Please log in to view your todo list!</p>;
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {editTodoId === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTodoTitle}
                                    onChange={(e) => setEditTodoTitle(e.target.value)}
                                />
                                <button onClick={editTodo}>Save</button>
                                <button onClick={() => setEditTodoId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <span>{todo.title}</span>
                                <button onClick={() => startEditTodo(todo.id, todo.title)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;