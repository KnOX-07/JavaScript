import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/todoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [taskText, setTaskText] = useState("");

    const addTask = () => {
        if (taskText.trim()) {
            dispatch({ type: "ADD_TASK", payload: taskText });
            setTaskText("");
        }
    };

    const deleteTask = (id) => {
        dispatch({ type: "DELETE_TASK", payload: id });
    };

    const toggleTask = (id) => {
        dispatch({ type: "TOGGLE_TASK", payload: id });
    };

    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(task => task.completed).length;

    return (
        <div>
            <h2 align="center">Add, delete, and toggle tasks...</h2>
            <center>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter a new task..."
                />
                <button onClick={addTask}>Add Task</button>
                <ul>
                    {state.tasks.map(task => (
                        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            {task.text}
                            <button onClick={() => toggleTask(task.id)}>Toggle</button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <p>Total tasks: {totalTasks}</p>
                    <p>Completed tasks: {completedTasks}</p>
                </div>
            </center>
        </div>
    );
};

export default TodoList;