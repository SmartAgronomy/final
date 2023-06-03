
const jwt = require('jsonwebtoken');
const secretKey = 'secretkeymithun';
// Validation middleware
function validateUser(req, res, next) {
  const { fname, lname, mobile, email, password, cpassword, address, state, city } = req.body;
  
  if (!fname || !lname || !mobile || !email || !password || !cpassword || !address || !state || !city) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  if (password !== cpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }
  
  next();
}


// Authentication middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = { userId: decoded.userId };
    
      next(); // Call the next middleware or route handler
    });
  } else {
    res.sendStatus(401);
  }
};


  module.exports = {
    validateUser,
    verifyToken
  };
  