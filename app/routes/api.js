var getDataController = require('./controller/api/getData'),
    postDataController = require('./controller/api/postData');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    apiRouter.route('/data')
        .get(getDataController)
        .post(postDataController);

    return apiRouter;
}
