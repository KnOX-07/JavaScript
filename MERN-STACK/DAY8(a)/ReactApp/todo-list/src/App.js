import React from 'react';
import TodoList from './components/TodoList';

const todos = [
  { title: "Learn React", completed: false },
  { title: "Build a Todo App", completed: true },
  { title: "Deploy the App", completed: false },
  { title: 'Fix Bugs', completed: true }
];

const App = () => {
  return (
    <div className="app">
      <h1 align="center">Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;