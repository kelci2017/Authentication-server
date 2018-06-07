'user strict'

module.exports = function (app) {

    var tokenHandler = require('../auth/auth_controller');

    app.route('/auth/getToken')
        .get(tokenHandler.get_token);

    app.route('/auth/verifyToken')
        .get(tokenHandler.verify_token);
}
