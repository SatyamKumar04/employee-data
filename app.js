const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./employeeRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
try {
    mongoose.connect('mongodb://localhost:27017/employee-data', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

// Middleware for parsing JSON requests
app.use(express.json());

// Use the employee routes
app.use('/api', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
