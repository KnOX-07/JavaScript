import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ChatApp from "./components/ChatApp";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ChatApp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
