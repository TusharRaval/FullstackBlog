import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchBlog = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    setAuthor(response.data.author);
                } catch (error) {
                    console.error('Error fetching blog for edit:', error);
                }
            };
            fetchBlog();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                const response = await axios.put(`http://localhost:5000/api/Blogs/${id}`, {
                    title,
                    content,
                    author,
                });
                alert('Post updated successfully!');
            } else {
                const response = await axios.post('http://localhost:5000/api/Blogs', {
                    title,
                    content,
                    author,
                });
                alert('Post created successfully!');
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving post:', error);
            alert('Failed to save post.');
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update Post' : 'Create Post'}</button>
            </form>
        </div>
    );
};

export default BlogForm;
