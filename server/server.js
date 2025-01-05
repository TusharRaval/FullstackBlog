    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();




    const app = express();

    // Middleware
    app.use(express.json());

    app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend access

    // Import Routes
    const blogRoutes = require('./routes/blogRoutes'); // ✅ Correct Import

    // Use Routes
    app.use('/api/blogs', blogRoutes); // ✅ Correct Usage


    // MongoDB Connection
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

   

    // Routes
    /*const blogRoutes = require('./routes/blogRoutes');
    app.use('/api/blogs', blogRoutes);*/

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
