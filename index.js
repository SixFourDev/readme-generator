// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter the project title:",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a brief description of the project:",
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Do you want to include a Table of Contents?',
        default: false,
    },
    {
        type: 'checkbox',
        name: 'tableOfContentsItems',
        message: 'Select the items to include in the Table of Contents:',
        choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'How to Contribute', 'Tests'],
        when: (answers) => answers.tableOfContents === true,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'confirm',
        name: 'addScreenshots',
        message: 'Do you want to add screenshots?',
        default: false,
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Enter screenshot URLs here',
        when: (answers) => answers.addScreenshots === true,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License (GPL)',
            'Other',
        ]
    },
    {
        type: 'input',
        name: 'customLicense',
        message: 'Enter your custom license:',
        when: (answers) => answers.license === 'Other',
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Enter any badges:',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter features:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter how to contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
