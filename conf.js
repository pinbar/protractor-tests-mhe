exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 5000,
	allScriptsTimeout: 2000,
  specs: ['reporting.spec.js'],
  multiCapabilities: [
    {'browserName': 'chrome'}
    , {'browserName': 'firefox'}
    , {'browserName': 'safari'} //safari doesnt work
  ]
};