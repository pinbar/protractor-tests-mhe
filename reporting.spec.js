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
  });
});