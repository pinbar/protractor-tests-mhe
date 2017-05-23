exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 5000,
	allScriptsTimeout: 2000,
  specs: ['*spec.js']
};