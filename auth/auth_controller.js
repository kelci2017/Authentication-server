'use strict';

var log_tag = "Authentication";
var TOKEN_SCHEME = "Bearer";

var jwt = require('jsonwebtoken'),
    bcrypt = require("bcrypt"),
    auth_config = require('../auth/auth_config'),
    constants = require('../objs/constants');
var TokenResult = require('../objs/TokenResult');

var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m/d/Y H:M:S');

exports.verify_token = function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) {
        console.log(log_tag, "token was not provided");
        return res.json(constants.RESULT_TOKEN_NOTFOUND);
    }
    var tokenScheme = req.headers.authorization.split(' ')[0];
    if (tokenScheme !== TOKEN_SCHEME) {
        console.log(log_tag, "token sheme is not correct");
        return res.json(constants.RESULT_SCHEME_NOTCORRECT);
    }
    if (typeof req.headers.authorization !== 'string') {
        return res.json(constants.RESULT_SCHEME_NOTCORRECT);
    }

    var tokens = req.headers.authorization.split(' ');

    if (tokens.length < 2) {
        return res.json(constants.RESULT_SCHEME_NOTCORRECT);
    }

    var token = tokens[1];

    jwt.verify(token, auth_config.key, function (err, decode) {
        if (err) {
            console.log(log_tag, 'invalid signature  ' + new Date(dt.now()));
            // if (err) return res.json(constants.RESULT_SIGNATURE_FAILED);
            return res.json(constants.RESULT_TOKEN_EXPIRED);
        }
        return res.json(constants.RESULT_SUCCESS);
    });
};

exports.get_token = function (req, res) {

    var requestkey = req.headers['requestkey'];
    var applicationid = req.headers['applicationid'];
    var token = '';

    jwt.verify(requestkey, auth_config.key, function (err, decode) {

        if (!requestkey) return res.json(constants.RESULT_REQUEST_KEY_INVALID);
        if (!applicationid) return res.json(constants.RESULT_APPLICATION_NOTFOUND);
        // if (err) return res.json(constants.RESULT_SIGNATURE_FAILED);
        if (err) return res.status(401).send();

        var email = decode.email;
        console.log("the email is: " + email);
        if (!email) return json(constants.RESULT_EMAIL_NOTFOUND);
        token = jwt.sign(
            {
                applicationid: applicationid
                , email: email
            }
            , auth_config.key
            , { expiresIn: auth_config.exp });
        return res.json(new TokenResult(0, '', token));
    });
};
