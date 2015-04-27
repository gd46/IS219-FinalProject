var collegeController = require('./controller/app/college'),
    collegesController = require('./controller/app/colleges'),
    postCollegeFileUploadController = require('./controller/app/postCollegeFileUpload'),
    q1Controller = require('./controller/app/q1'),
    homeController = require('./controller/app/home'),
    chartController = require('./controller/app/chart'),
    postEnrollmentFileUploadController = require('./controller/app/postEnrollmentFileUpload');

module.exports = function(app, express) {
    var appRouter = express.Router();

    appRouter.get('/', homeController);
    appRouter.get('/college/:id', collegeController);
    appRouter.get('/colleges', collegesController);
    appRouter.post('/upload/college', postCollegeFileUploadController);
    appRouter.post('/upload/enrollment', postEnrollmentFileUploadController)
    appRouter.get('/q1', q1Controller);
    appRouter.get('/q2', chartController.q2);
    appRouter.get('/q3', chartController.q3);

    return appRouter;
}
