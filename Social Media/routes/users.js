const router = require('express').Router();
const User = require('../models/users.js');
router.post('/register',async(req,res)=>{
    const {name,password,email} = req.body;
    const user = new User({name,password,email});
    await user.save();
    res.json(user);
})
module.exports = router;