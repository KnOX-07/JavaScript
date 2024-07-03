import React from "react";
import styles from "../styles";

const ToDoItem = ({ todo, index, editTodo, deleteTodo, toggleComplete }) => {
    return (
        <li style={styles.listItem}>
            <span
                style={{
                    ...styles.title,
                    textDecoration: todo.complete ? "line-through" : "none",
                }}
                onClick={() => toggleComplete(index)}
            >
                {todo.title}
            </span>
            <button onClick={() => editTodo(index)} style={styles.editButton}>
                Edit
            </button>
            <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>
                Delete
            </button>
        </li>
    );
};

export default ToDoItem;