import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BlogPostManager = () => {
    const [posts, setPosts] = useState([]);
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error occured!", error);
            });
    }, []);

    const deletePost = (id) => {
        axios.delete(`http://localhost:8000/posts/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== id));
            })
            .catch(error => {
                console.error("Error occured!", error);
            });
    };

    return (
        <div>
            <h1>Blog Post Manager</h1>
            <button onClick={isAuthenticated ? logout : login}>
                {isAuthenticated ? "Logout" : 'Login'}
            </button>
            {isAuthenticated && (
                <Link to="/new">
                    <button>Create New Post</button>
                </Link>
            )}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        {isAuthenticated && (
                            <>
                                <button><Link to={`/edit/${post.id}`}>Edit</Link></button>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPostManager;