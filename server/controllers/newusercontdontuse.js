const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");

router.post('/create', function (req, res) {
    // let userModel = {
    //     email: req.body.user.email,
    //     password: req.body.user.password,
    // };
    User.create({
        email: req.body.user.email,
        password: req.body.user.password,
    })
    
    .then(function createSuccess(user) {
        let token
        
        res.json({
            user: user,
            message: "User successfully created" ,
        })
    })
        .catch(function (err) {
            res.status(500).json({ error: err });
        });
});

router.post('/login', function (req, res) {
    
    User.findOne({
        where: { 
            email: req.body.user.email 
        } 
    })
    .then(function loginSuccess(user) {
            if (user) {
                res.status(200).json({ user: user });
            } else {
                res.send("User not found");
            }
        }
    ).catch(function (err) {
        res.status(500).json({ error: err });
    });
});

module.exports = router;

// let express = require("express");
// const sequelize = require("../db");
// let router = express.Router();
// let sequalize = require.apply("..db");
// let User = sequelize.import("../models/user.js"); 
// same as top two lines