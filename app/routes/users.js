/**
 * Created by tonim on 14/10/2016.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
    failureFlash : true // allow flash messages
}));


router.post('/login', passport.authenticate('local-login', {
    failureFlash : true // allow flash messages
}));



module.exports = router;
