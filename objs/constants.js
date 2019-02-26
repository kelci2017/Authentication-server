var BaseResult = require('./BaseResult');

function constants() { }

constants.prototype.RESULT_UNKNOWN = new BaseResult(1, "unknown error");
constants.prototype.RESULT_NETWORK = new BaseResult(2, "network error");
constants.prototype.RESULT_SUCCESS = new BaseResult(0, "success");
constants.prototype.RESULT_TOKEN_EXPIRED = new BaseResult(21, "token expired");
constants.prototype.RESULT_SIGNATURE_FAILED = new BaseResult(22, "signature failed");
constants.prototype.RESULT_TOKEN_NOTFOUND = new BaseResult(23, 'token not found');
constants.prototype.RESULT_REQUEST_KEY_INVALID = new BaseResult(24, 'Request key invalid');
constants.prototype.RESULT_SCHEME_NOTCORRECT = new BaseResult(25, 'token sheme not correct');
constants.prototype.RESULT_APPLICATION_NOTFOUND = new BaseResult(26, 'application not found');
constants.prototype.RESULT_EMAIL_NOTFOUND = new BaseResult(17, 'email not found');

module.exports = constants.prototype;