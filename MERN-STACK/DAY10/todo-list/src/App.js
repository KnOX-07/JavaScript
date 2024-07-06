import React from "react";
import { AuthProvider } from "./components/AuthContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <TodoList />
      </div>
    </AuthProvider>
  );
}

export default App;