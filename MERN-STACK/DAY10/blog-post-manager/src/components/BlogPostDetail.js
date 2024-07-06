import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPostDetail = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error("Error occured!", error);
            });
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPostDetail;