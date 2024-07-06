import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BlogPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/posts/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(error => {
                    console.error("Error occured!", error);
                });
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = { title, content };

        if (id) {
            axios.put(`http://localhost:8000/posts/${id}`, post)
                .then(() => {
                    navigate("/");
                })
                .catch(error => {
                    console.error("Error occured!", error);
                });
        } else {
            axios.post("http://localhost:8000/posts", post)
                .then(() => {
                    navigate("/");
                })
                .catch(error => {
                    console.error("Error occured!", error);
                });
        }
    };

    return (
        <div>
            <h1>{id ? "Edit Post" : "Create New Post"}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default BlogPostForm;