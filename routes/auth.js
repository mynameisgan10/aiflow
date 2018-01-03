const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    const user = new User({
        username: 'test',
        password: '123123',
        profileImage: '123123',
        apps: ['123123', '123123']
    });
    user.save((err, result) => {
        if(err){
            return res.status(400).json({
                message:"something went wrong"
            });
        }
        res.status(200).json({
            message:"added person"
        });
    });
});

module.exports = router;