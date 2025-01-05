import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching the blog:', error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Created on:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default BlogPost;
