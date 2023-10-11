const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./employeeRoutes');

const app = express();
const port = process.env.PORT || 3000;


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


app.use(express.json());


app.use('/api', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
