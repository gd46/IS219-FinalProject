var collegeController = require('./controller/app/college'),
    collegesController = require('./controller/app/colleges'),
    postCollegeFileUploadController = require('./controller/app/postCollegeFileUpload'),
    q1Controller = require('./controller/app/q1'),
    q2Controller = require('./controller/app/q2'),
    q3Controller = require('./controller/app/q3'),
    homeController = require('./controller/app/home'),
    chartController = require('./controller/app/chart'),
    postEnrollmentFileUploadController = require('./controller/app/postEnrollmentFileUpload'),
    postTuitionController = require('./controller/app/postTuitionFileUpload');

module.exports = function(app, express) {
    var appRouter = express.Router();

    appRouter.get('/', homeController);
    appRouter.get('/college/:id', collegeController);
    appRouter.get('/colleges', collegesController);
    appRouter.post('/upload/college', postCollegeFileUploadController);
    appRouter.post('/upload/enrollment', postEnrollmentFileUploadController);
    appRouter.post('/upload/tuition', postTuitionController);
    appRouter.get('/q1', chartController.q1);
    appRouter.get('/q2', chartController.q2);
    appRouter.get('/q2/:id', chartController.q2SpecificCollege);
    appRouter.get('/q3', chartController.q3);
    appRouter.get('/q3/:id', chartController.q3SpecificCollege);
    appRouter.get('/api/q1', q1Controller);
    appRouter.get('/api/q2/:id', q2Controller);
    appRouter.get('/api/q3/:id', q3Controller);

    return appRouter;
};
