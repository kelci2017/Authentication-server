// function BaseResult() {
//     this.resultCode = 0;
//     this.resultDesc = null;
// }

// function BaseResult(resultCode, resultDesc) {
//     this.resultCode = resultCode;
//     this.resultDesc = resultDesc;
// }

// BaseResult.prototype.getResultCode = function () {
//     return this.resultCode;
// }

// BaseResult.prototype.setResultCode = function (resultCode) {
//     this.resultCode = resultCode;
// }

// BaseResult.prototype.getResultDesc = function () {
//     return this.resultDesc;
// }

// BaseResult.prototype.setResultDesc = function (resultDesc) {
//     this.resultDesc = resultDesc;
// }

// module.exports = BaseResult;

//the followings use es6 with class which achieve the same logic the above
"use strict";
class BaseResult {
    constructor(resultCode, resultDesc) {
        this.resultCode = resultCode;
        this.resultDesc = resultDesc;
    }
    getResultCode() {
        return this.resultCode;
    }
    setResultCode(resultCode) {
        this.resultCode = resultCode;
    }
    getResultDesc() {
        return this.resultDesc;
    }
    setResultDesc() {
        this.resultDesc = this.resultDesc;
    }
}
module.exports = BaseResult;