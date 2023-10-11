const jwt = require('jsonwebtoken');


const isAuthenticated = (req, res, next) => {
    
    const token = req.headers.authorization && req.headers.authorization.replace('Bearer ', '');

    if (token) {
        try {
           
            const decoded = jwt.verify(token, 'your-secret-key'); 


            next(); 
        } catch (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = isAuthenticated;
