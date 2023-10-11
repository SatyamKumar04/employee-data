const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,

    },

    email: {
        type: string,
        required: true,

    },

    department: {
        type: string,
        required: true,
        enum: ['IT', 'HR', 'OPERATION', 'MARKETING'],
    },



})

employeeSchema.index({ department: 1 });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;