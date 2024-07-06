import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import BlogPostManager from "./components/BlogPostManager";
import BlogPostForm from "./components/BlogPostForm";
import BlogPostDetail from "./components/BlogPostDetail";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<BlogPostManager />} />
          <Route path="/new" element={<BlogPostForm />} />
          <Route path="/edit/:id" element={<BlogPostForm />} />
          <Route path="/posts/:id" element={<BlogPostDetail />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;