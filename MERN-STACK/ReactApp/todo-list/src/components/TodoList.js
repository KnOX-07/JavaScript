import React from 'react';
import './TodoList.css';

const TodoList = ({ todos }) => {
    const incompleteTodos = todos.filter(todo => !todo.completed);

    return (
        <div className="todo-list">
            <h2>Incomplete Todos</h2>
            <ul>
                {incompleteTodos.map((todo, index) => (
                    <li key={index} className="incomplete-todo">
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;