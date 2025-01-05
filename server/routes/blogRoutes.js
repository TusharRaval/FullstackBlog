const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/Blog');

// Get all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

// Get a single blog
router.get('/api/blogs/:id', async (req, res) => {
    console.log("Received ID:", req.params.id); // Debugging log
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid Blog ID format" });
        }

        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    } catch (err) {
        console.error("Error fetching blog post:", err);
        res.status(500).json({ message: "Server error" });
    }
});


// Create a blog
// Create a Blog Post
router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        // ✅ Create a new blog post properly
        const newBlog = new Blog({
            title,
            content,
            author
        });

        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a blog
router.put('/:id', async (req, res) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
});

module.exports = router;

