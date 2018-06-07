function BaseResult() {
    this.resultCode = 0;
    this.resultDesc = null;
}

function BaseResult(resultCode, resultDesc) {
    this.resultCode = resultCode;
    this.resultDesc = resultDesc;
}

BaseResult.prototype.getResultCode = function () {
    return this.resultCode;
}

BaseResult.prototype.setResultCode = function (resultCode) {
    this.resultCode = resultCode;
}

BaseResult.prototype.getResultDesc = function () {
    return this.resultDesc;
}

BaseResult.prototype.setResultDesc = function (resultDesc) {
    this.resultDesc = resultDesc;
}

module.exports = BaseResult;