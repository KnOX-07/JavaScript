import React from "react";
// import UserList from "./components/UserList";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/DashboardPage";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
// import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {

  return (
    // <div>
    //   <UserList />
    // </div>

    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/dashboard/*" element={<Dashboard />} />
    //       <Route path="/" element={<Home />} />
    //       <Route path="*" element={<Navigate to="/" />} />
    //     </Routes>
    //   </div>
    // </Router>

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>

    // <center>
    //   <div>
    //     <h1>React App</h1>
    //     <ThemeSwitcher />
    //   </div>
    // </center>
  );
};

export default App;