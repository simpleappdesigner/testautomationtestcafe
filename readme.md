In this project setup, feature file and step definitions at the following:

![project struct](project_struct.png)

So this need to be defined in .testcaferc.json.<br>
`"src": ["node_modules/testcafe-cucumber-steps/index.js", "tests/**/*.js", "tests/**/*.featureignore","features/**/*.js","features/**/*.feature"]`

1. Command - `npx cucumber-js --require features` to find if there is any missing step definition.
2. `npx gherkin-testcafe` executes the test cases
3. `npx gherkin-testcafe --reporter html:report.html  ` report with name report.html to be created.z
4. another way to get allure reports.
    1. install `npm install testcafe-reporter-allure -D`
    2. run tests to create allure reports `npx gherkin-testcafe --reporter allure `
    3. to view report install `npm install -g allure-commandline -D` and then run 
        1. create report `npx allure generate allure/allure-results --clean -o allure/allure-report`
        2. view report `npx allure open allure/allure-report`


Get Started! (git and Node installed in the system)

1. `mkdir  testautomationtestcafe`
2. `cd testautomationtestcafe`    
3. `git clone https://github.com/simpleappdesigner/testautomationtestcafe.git`
4. `npm install`
5. `npx gherkin-testcafe` or with slow speed `npx gherkin-testcafe --speed 0.1`
or record video `npx gherkin-testcafe --speed 0.1 --video reports/screen-captures --video-options singleFile=true`
6. allure reports:
    1. `npx gherkin-testcafe --reporter allure`
    2. `npx allure generate allure/allure-results --clean -o allure/allure-report`
    3. `npx allure open allure/allure-report`