import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';


function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                    <Route path="/BlogForm" element={<BlogForm />} />
                    <Route path="/BlogList" element={<BlogList />} />
                    <Route path="/BlogPost" element={<BlogPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
