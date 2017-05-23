## Protractor tests for MHE applications

### tech stack
* **protractor** - End to end testing framework (uses WebDriver for driving the browser)

### prerequisites
* node is installed (`node -v`)
* protractor is installed globally 
    * to check, `protractor --version`
    * to install, `npm install -g protractor`

### how to use
* clone repo or download zip
* run `webdriver-manager update` and then `webdriver-manager start`
* in a separate window, navigate to the project directory and run `protractor conf.js`

### customize
* update the baseUrl(env), username, password in `data.js`