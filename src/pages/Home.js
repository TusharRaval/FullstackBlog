import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Blogs')
            .then(res => {
                console.log("Fetched data:", res.data); // Check in console
                setBlogs(res.data);
            })
            .catch(err => console.log("Error fetching blogs:", err));
    }, []);

    return (
        <div className='home'>
            <h2>Blog Posts</h2>
            {blogs.map(blog => (
                <div key={blog._id} className="card my-3">
                    <div className="card-body">
                        <h5>{blog.title}</h5>
                        <p>{blog.content.substring(0, 100)}...</p>
                        <Link to={`/edit/${blog._id}`} className="btn btn-primary">Edit</Link>
                        <Link to={`/post/${blog._id}`} className="btn btn-secondary">View</Link>
                        <Link to={`/delete/${blog._id}`} className="btn btn-danger">Delete</Link>
                        <Link to={`/comment/${blog._id}`} className="btn btn-warning">Comment</Link>
                        <Link to={`/like/${blog._id}`} className="btn btn-success">Like</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
