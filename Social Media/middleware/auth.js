const jwt = require('jsonwebtoken');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({message:"Authorization required"});
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message:"missing token"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if(!user){
            return status(401).json({message:"User not found"});
        }
        req.user = user;
        next();
    }
    catch(err){
        res.status(401).json({message:"Invalid token"});
    }
}