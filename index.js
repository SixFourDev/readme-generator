// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Create a function to generate the answers for the README
function generateREADME(answers) {
    // Add the Title of the webpage
    let readmeContent = `# ${answers.title}\n\n`;

    // Add license badge after the title
    readmeContent += `![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-brightgreen)\n\n`;

    // Add the description
    readmeContent += `## Description\n\n${answers.description}\n\n`;

    // Add the Table of Contents
    readmeContent += `## Table of Contents\n\n`;
    // Use forEach to loop through all TOC
    answers.tableOfContentsItems.forEach(item => {
        readmeContent += `- [${item}](#${item.toLowerCase().replace(/\s+/g, '-')})\n`;
    });
    readmeContent += '\n';

    // Add installation instructions
    readmeContent += `## Installation\n\n${answers.installation}\n\n`;

    // Add Usage instructions
    readmeContent += `## Usage\n\n${answers.usage}\n\n`;

    // Add screenshots
    if (Array.isArray(answers.screenshots) && answers.screenshots.length > 0) {
        readmeContent += `## Screenshots\n\n`;
        answers.screenshots.forEach(screenshot => {
            readmeContent += `![Screenshot](${screenshot})\n\n`;
        });
    }

    // Add License used
    readmeContent += `## License\n\n${answers.license}\n\n`;

    // Add Features of website
    readmeContent += `## Features\n\n${answers.features}\n\n`;

    // Add how to contribute
    readmeContent += `## Contribution\n\n${answers.contribution}\n\n`;

    // Add any tests for the website
    readmeContent += `## Tests\n\n${answers.tests}\n\n`;

    // Add Questions section
    readmeContent += `## Questions\n\n`;
    readmeContent += `For any questions or inquiries, feel free to reach out to me:\n\n`;
    readmeContent += `- GitHub: [${answers.github}](https://github.com/${answers.github})\n`;
    readmeContent += `- Email: ${answers.email}\n\n`;

    return readmeContent;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File "${fileName}" has been generated successfully.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error(error);
        })
}

// Function call to initialize app
init();
