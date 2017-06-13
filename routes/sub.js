var express = require('express');
var router = express.Router();
var passport = require('passport');
var Cases = require('../models/cases');

var User = require('../models/user');

// get all cases with persons name
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
        Cases.getCaseByName(name, function (error, results) {
            if (error) throw error;
            res.json(results);
        });
    }
});


module.exports = router;