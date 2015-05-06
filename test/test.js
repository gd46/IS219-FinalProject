var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var assert = chai.assert;

chai.use(chaiHttp);

// Backend tests

describe("App", function() {

    describe('GET /', function() {
        it('should return 200 OK', function(done) {
            chai.request('http://localhost:8080')
                .get('/')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/q1', function() {
        it('should return 200 OK', function(done) {
            chai.request('http://localhost:8080')
                .get('/api/q1')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('GET /q1', function() {
        it('should return 200 OK', function(done) {
            chai.request('http://localhost:8080')
                .get('/q1')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('GET /q2', function() {
        it('should return 200 OK', function(done) {
            chai.request('http://localhost:8080')
                .get('/q2')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('GET /q3', function() {
        it('should return 200 OK', function(done) {
            chai.request('http://localhost:8080')
                .get('/q3')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
