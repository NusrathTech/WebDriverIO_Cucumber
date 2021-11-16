# WebDriverIO_Cucumber

# Project Execution
To execute the project, open the terminal and execute the command "npx wdio run ./wdio.conf.js"

# Report
On successful project execution, allure-results folder will be generated with results

Open the terminal,  then run "allure generate allure-results" (This will create another folder named allure-reports)

To view Allure report, run command "allure open" in terminal (This will show the run report in browser)

# Note
This project is set to run in Chrome browser. To run the same project in other browsers like microsoft edge, add to the capabilities as follows
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true