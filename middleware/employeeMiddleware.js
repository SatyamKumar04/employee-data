const Employee = require('../models/employeeModel');

module.exports = {
    filterByDepartment: async (req, res, next) => {
        try {
            const department = req.params.department;
            const employees = await Employee.find({ department });

            req.filteredEmployees = employees;
            next();
        } catch (error) {
            next(error);
        }
    }
};
