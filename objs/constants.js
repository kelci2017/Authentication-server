var BaseResult = require('./BaseResult');

function constants() { }

constants.prototype.RESULT_UNKNOWN = new BaseResult(1, "unknown error");
constants.prototype.RESULT_NETWORK = new BaseResult(2, "network error");
constants.prototype.RESULT_SUCCESS = new BaseResult(0, "success");
constants.prototype.RESULT_TOKEN_EXPIRED = new BaseResult(11, "token expired");
constants.prototype.RESULT_SIGNATURE_FAILED = new BaseResult(12, "signature failed");
constants.prototype.RESULT_TOKEN_NOTFOUND = new BaseResult(13, 'token not found');
constants.prototype.RESULT_REQUEST_KEY_INVALID = new BaseResult(14, 'Request key invalid');
constants.prototype.RESULT_SCHEME_NOTCORRECT = new BaseResult(15, 'token sheme not correct');
constants.prototype.RESULT_APPLICATION_NOTFOUND = new BaseResult(16, 'application not found');
constants.prototype.RESULT_EMAIL_NOTFOUND = new BaseResult(16, 'email not found');

module.exports = constants.prototype;