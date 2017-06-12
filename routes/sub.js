var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Cases = require('../models/cases');

var User = require('../models/user');

// get case
router.post('/getCase', function(req, res) {

    var name = '%'+ req.body.name + '%';

    var errors = req.validationErrors();

    if (errors)
    {
        res.render('register', {
            errors: errors
        });
    }
    else
    {
        console.log(name);
        Cases.getCaseByName(name, function (error, results, fields) {
            if (error) throw error;
            console.log('Results', results);
            res.json(results);
        });
    }
});


module.exports = router;