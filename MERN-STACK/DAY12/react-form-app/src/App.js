import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import useForm from "./useForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (inputs) => {
    setUsername(inputs.username);
    setIsLoggedIn(true);
    sessionStorage.setItem("username", inputs.username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("username");
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard username={username} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;