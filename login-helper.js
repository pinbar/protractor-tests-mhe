module.exports = {
    login: function(url, username, password) {
        
        browser.waitForAngularEnabled(false); //needed for non angular apps
        browser.get(url);
        
        //allows waiting until an element is present (needed for non angular apps)
        var EC = protractor.ExpectedConditions; 
        browser.wait(EC.presenceOf(element(by.name('loginUserName'))), 15000);

        element(by.name('loginUserName')).sendKeys(username);
        element(by.name('loginPassword')).sendKeys(password);
        element(by.id('loginLink')).click();
        
        //ensure that the bookbag is loaded
        browser.wait(EC.presenceOf(element(by.id('applicationHeader'))), 15000);
    }
}