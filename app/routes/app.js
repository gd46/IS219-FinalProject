var collegeController = require('./controller/app/college'),
    collegesController = require('./controller/app/colleges'),
    postFileUploadController = require('./controller/app/postFileUpload'),
    q1Controller = require('./controller/app/q1'),
    homeController = require('./controller/app/home'),
    chartController = require('./controller/app/chart');

module.exports = function(app, express) {
    var appRouter = express.Router();

    appRouter.get('/', homeController);
    appRouter.get('/college/:id', collegeController);
    appRouter.get('/colleges', collegesController);
    appRouter.post('/upload', postFileUploadController);
    appRouter.get('/q1', chartController.q1);
    appRouter.get('/q2', chartController.q2);
    appRouter.get('/q3', chartController.q3);

    return appRouter;
}
