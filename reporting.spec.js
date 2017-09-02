var loginHelper = require('./login-helper');
var data = require('./data');

describe('reporting test', function() {
  it('view details should have a title', function() {

    //allows waiting until an element is present (needed for non angular apps)
    var EC = protractor.ExpectedConditions;

    //log into ConnecrED in the given environment using test credentials
    loginHelper.login(data.baseUrl, data.username, data.password);
    
    //launch EM4 book
    browser.wait(EC.presenceOf(element(by.css('.premiumBook-title'))), 15000);
    element(by.css('.premiumBook-title')).click();

    browser.sleep(1000);

    //dismiss optional notification
    browser.wait(EC.presenceOf(element(by.css('.cancelButton'))), 15000);
    element(by.css('.cancelButton')).click();

    browser.sleep(1000);

    //navigate to progress report
    browser.wait(EC.presenceOf(element(by.css('.navigation-toggle'))), 15000);
    element(by.css('.navigation-toggle')).click();
    element(by.css('.report')).click();
    element(by.css('.progress-report')).click();

    //navigate to view details
    browser.wait(EC.presenceOf(element(by.css('.view-details'))), 25000);
    element(by.css('.view-details')).click();
    
    //assert test condition
    browser.wait(EC.presenceOf(element(by.css('div.activity-title > math-jax > div'))), 15000);
    expect(element(by.css('div.activity-title > math-jax > div')).getAttribute('innerHTML')).toEqual('Counts on a Number Line');

    browser.wait(EC.presenceOf(element(by.css('.dialog-close'))), 15000);
    element(by.css('.dialog-close')).click();
    browser.sleep(1000);

    //logout
    logoutEM4();
  });
});

function logoutEM4() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(element(by.css('.dropdown-toggle'))), 15000);
    element(by.css('.dropdown-toggle')).click();
    element(by.css('.logout')).click();
    //ensure that the login page is loaded
    browser.wait(EC.presenceOf(element(by.id('loginForm'))), 15000);
}