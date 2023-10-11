const Employee = require('../models/empployemodel');


module.export = {
  getAllEmployee: async(req,res) => {
    try {
        const employees = await Employee.find().select('name , department');
        res.json(employees); 
    }catch(error) {
        res.status(500).json({error: 'an error ocurred while fetching employees'})
    }
  },

    getAllEmployee: async (req, res) => {
        try {
            const employees = await Employee.find();
            res.json(employees);
        } catch (error) {
            res.status(500).json({ error: 'an error ocurred while fetching employees' })
        }
    },

  getEmployeeByDepartment: async(req , res) => {
    try {
        const employees = await Employee.find({ department }).select('name department');
        res.json(employees);
    }catch (error) {
        res.status(500).json({ error: 'an error ocurred while fetching employees' })
    }
  }





}
