import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import styles from "../styles";

const ToDoList = () => {
    const [todos, setTodos] = useState(
        JSON.parse(sessionStorage.getItem("todos")) || []
    );
    const [title, setTitle] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (title.trim() === "") return;
        if (editIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editIndex].title = title;
            setTodos(updatedTodos);
            setEditIndex(null);
        } else {
            setTodos([...todos, { title, complete: false }]);
        }
        setTitle("");
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const editTodo = (index) => {
        setTitle(todos[index].title);
        setEditIndex(index);
    };

    const toggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].complete = !updatedTodos[index].complete;
        setTodos(updatedTodos);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>To-Do List</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task"
                    style={styles.input}
                />
                <button onClick={addTodo} style={styles.button}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>
            <ul style={styles.list}>
                {todos.map((todo, index) => (
                    <ToDoItem
                        key={index}
                        todo={todo}
                        index={index}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
