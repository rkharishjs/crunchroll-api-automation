Project Overview

The goal of this project is to test SWAPI endpoints. The project is created using TypeScript, JEST and SuperTest. 

The structure of the project conprises of 3 main catagories :
1) Config -  contains base url for automation to be referenced in all the test case files. It can also include other authorization and authentication key values.
2) Controller - for each API reasource we have a seperate controller file which includes all the REST API requests for that secific resource with paratmerization of dynamic data.
3) Specifications - for each API reasource we have a seperate specification file where the resource specific test cases have been defined. These testcases untilze the reusable REST API untility method created in the specific controllers.

Setup and Build

1) User local to have node.js and NPM installed and an IDE such as Visual Studio Code
2) The project needs to be cloned or downloaded to a user local machine
3) Browse the downloaded project folder in VS code editor
4) Open new terminal and run following command to install dependecies - "npm install"
5) On the same terminal run the following command to run all specification files together - "npx jest specs"
6) To run each specific specifications files (by reasource - ie films) use - "npx jest specs/films.spec.ts"

Reporting

The project supports two main reports :

1) JUnit Report - generates xml file with consolidate report of latest test case run 
2) JEST Report - generates HTML report (to be veiwed on browser) with consolidated report of latest test run

Both reports are automatically generated on test runs. Both reports and can viewed under the Reports directory in the project.







