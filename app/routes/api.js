var getDataController = require('./controller/getData'),
    postDataController = require('./controller/postData');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    apiRouter.route('/data')
        .get(getDataController)
        .post(postDataController);

}
