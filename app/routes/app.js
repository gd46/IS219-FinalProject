var collegeController = require('./controller/app/college'),
    collegesController = require('./controller/app/colleges'),
    postFileUploadController = require('./controller/app/postFileUpload'),
    homeController = require('./controller/app/home');
    chartController = require('./controller/app/chart');

module.exports = function(app, express) {
    var appRouter = express.Router();

    appRouter.get('/', homeController);
    appRouter.get('/college/:id', collegeController);
    appRouter.get('/colleges', collegesController);
    appRouter.route('/upload')
        .post(postFileUploadController);
    appRouter.get('/chart', chartController);

    return appRouter;
}
