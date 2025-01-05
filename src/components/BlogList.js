import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/Blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="container mt-4">
            <h2>All Blog Posts</h2>
            <div className="list-group">
                {blogs.map((blog) => (
                    <Link key={blog._id} to={`/blogs/${blog._id}`} className="list-group-item list-group-item-action">
                        <h5>{blog.title}</h5>
                        <p>{blog.content.substring(0, 100)}...</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
