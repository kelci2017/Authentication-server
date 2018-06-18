// var inherits = require('util').inherits;

// var BaseResult = require('./BaseResult');

// function TokenResult(token) {
//     BaseResult.call();
//     this.resultCode = 0;
//     this.token = token;
// }

// inherits(TokenResult, BaseResult);

// BaseResult.prototype.getToken = function () {
//     return this.token;
// }

// BaseResult.prototype.setToken = function (token) {
//     this.token = token;
// }

// module.exports = TokenResult;
"use strict";
var BaseResult = require('./BaseResult');
class TokenResult extends BaseResult {
    constructor(resultCode, resultDesc, token) {
        super(resultCode, resultDesc);
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
}
module.exports = TokenResult;