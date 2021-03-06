
// declaring variables that node will be accessing dependinces 
const inquirer = require('inquirer');
const fs = require('fs');

// calling inquirer. will prompt user for input in the command line
inquirer
    .prompt([
        {
            type: 'input',
            message: 'GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: "email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your project's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please write a short description of your project",
            name: 'description',
        },
        {
            type: 'list',
            message: "license",
            name: 'license',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
        },
        {
            type: 'input',
            message: "What command should be run to install dependecies?",
            name: 'install',
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'test',
        },
        {
            type: 'input',
            message: "tell the user how to use your repo",
            name: 'usage',
        },
        {
            type: 'input',
            message: "is Contribution allowed",
            name: 'contribution',
        },
    ])

    //  the information the user inputs will be taken as data
    .then((data) => {

// this function takes in the information given from the user and returns the contents of the readme.
        function renderReadme(title, license, description, install, usage, contribution, test, email, github) {
            
            // declaring function var
            let licenseBadge = "";
            let licenseDiscrption = ""

            // swtich will determine which license badge and license discription will be used.
            switch (license) {
                case "MIT": licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                    licenseDiscrption = "This project is licensed under the MIT license."
                    break;
                case "APACHE 2.0": licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                    licenseDiscrption = "This project is licensed under the APACHE 2.0 license."
                    break;
                case "GPL 3.0": licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                    licenseDiscrption = "This project is licensed under the GPL 3.0 license."
                    break;
                case "BSD 3": licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                    licenseDiscrption = "This project is licensed under the BSD 3 license."
                    break;
                case "none": licenseBadge = ""
                    licenseDiscrption = "This project is not under any licenses."
                    break;
                default: licenseBadge = ""
                    licenseDiscrption = "This project is not under any licenses."
                    break;
            }


// this returns the readme format.
            return `# ${title}
${licenseBadge}
## Description
${description}
## Table of Contents
* [Installation](#installation)  
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Example](#example)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
'''
${install}
'''
## Usage
${usage}
## License
${licenseDiscrption}
## Contributing
${contribution}
## Tests
To run tests, run the following command:
'''
${test}
'''
...
## Questions
If you have any questions about the repo, please shoot me an email! ${email}. Find more of my work at [${github}](https://github.com/${github}/).
`}

// this appends the file README.md and calls the function to render it.
        fs.appendFile("README.md", (renderReadme(data.name, data.license, data.description, data.install, data.usage, data.contribution, data.test, data.email, data.github, data.example)), (err) =>
            err ? console.log(err) : console.log("SUCCESS")
        );

    });