var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var path = require('path');

describe("e2e Tests", function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    describe("GET /", function() {
        it("should test homepage", function() {
            browser.get(browser.baseUrl);
            browser.sleep(2000);
            var pageTitle = element(by.xpath("/html/body/div[2]/h1")).getText();
            browser.sleep(5000);
            assert.eventually.equal(pageTitle, 'Project Description', 'Title does not equal project description');
        });
    });

    describe("GET /colleges", function() {
        it("should grab a list of colleges", function() {

            // File upload

            // element(by.xpath("/html/body/div[1]/div/ul/li[2]/a")).click();
            //    browser.sleep(2000);
            //    element(by.xpath("//*[@id='csvFile']")).click();
            //    browser.sleep(2000);
            //    var fileToUpload = '../../data/data.csv';
            //    var absolutePath = path.resolve(__dirname, fileToUpload);
            //    browser.sendKeys(absolutePath);
            //    browser.sleep(2000);

            element(by.xpath("/html/body/div[1]/div/ul/li[2]/a")).click();
            browser.sleep(5000);
            assert.eventually.include(browser.getCurrentUrl(), 'colleges', 'Not on the colleges page');
        });
    });

    describe("Get /colleges/:id", function() {
        it("should grab details of colleges clicked", function() {
            element(by.xpath("/html/body/div[2]/div/table/tbody/tr[1]/td/a")).click();
            var pageTitle = element(by.xpath("/html/body/div[2]/h1")).getText();
            browser.sleep(5000);
            assert.eventually.equal(pageTitle, 'Alabama A & M University', 'Title does not equal Alabama A & M University');
        });
    });

    describe("Get /q1", function() {
        it("should grab question 1", function() {
            element(by.xpath("/html/body/div[1]/div/ul/li[3]/a")).click();
            browser.sleep(5000);
            assert.eventually.include(browser.getCurrentUrl(), 'q1', 'Not on question one page');
        });
    });

    describe("Get /q2", function() {
        it("shoud grab question 2", function() {
            element(by.xpath("/html/body/div[1]/div/ul/li[4]/a")).click();
            browser.sleep(2000);
            element(by.xpath("/html/body/div[2]/div/table/tbody/tr[1]/td/a")).click();
            browser.sleep(5000);
            assert.eventually.include(browser.getCurrentUrl(), 'q2/100654', 'Not on question two page');
        });
    });

    describe("Get /q3", function() {
        it("should grab question 3", function() {
            element(by.xpath("/html/body/div[1]/div/ul/li[5]/a")).click();
            browser.sleep(2000);
            element(by.xpath("/html/body/div[2]/div/table/tbody/tr[1]/td/a")).click();
            browser.sleep(5000);
            assert.eventually.include(browser.getCurrentUrl(), 'q3/100654', 'Not on question three page');
        });
    });

    describe("Catch any routes that dont exist", function() {
        it("should display the 404 error page", function() {
            browser.get(browser.baseUrl + '/noroute');
            var el = element(by.css('div.error'));
            var isPresent = browser.isElementPresent(el);
            browser.sleep(5000);
            assert.eventually.isTrue(isPresent, "should be on the 404 error page");
        });
    });




});
