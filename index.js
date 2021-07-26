const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = answers => {
    // create answers array if none exixts
    if (!answers) {
        answers = [];
    }
    console.log('Welcome to the Readme Generator')
    // begin inquirer prompts
    return inquirer.prompt([
        {   //Author's name
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub username!');
                    return false;
                }
            }
        },
        {   //user email
            type: 'input',
            name: 'email',
            message: 'Enter your email address(required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your email address');
                    return false;
                }
            }
        },
        {   // Project title
            type:'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your project title');
                    return false;
                }
            }
        },
        {   //Project Description
            type: 'input',
            name: 'description',
            message: 'Enter the project discription',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a project description');
                    return false;
                }
            }
        },
        {   //Table of contents Y/N
            type:'confirm',
            name:'confirmTable',
            message: 'Does your ReadMe require a table of contents?',
            default: true
        },
        {   //intallation instructions
            type:'input',
            name:'installation',
            message:'Does you project have special installation instructions?'
        },
        {   //usage information
            type:'input',
            name:'usage',
            message: 'Enter any usage instructions or links to instructions'
        },
        {   //contributor Y/N
            type: 'confirm',
            name: 'confirmContributor',
            message: 'Do you have any contributors to mention?',
            default: false
        },
        {   //contributor name
            type: 'input',
            name: 'contributor',
            message: 'enter contributors names or GitHub accounts (required)',
            when: ({confirmContributor}) => confirmContributor,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter contributor information');
                    return false;
                }
            }
        },
        {   //tests
            type: 'input',
            name: 'tests',
            message: 'Enter any special test info or instructions'
        },
        {   //licenses
            type: 'checkbox',
            name: 'licenses',
            message: 'Select which licenses are in use',
            choices: ['Apache-2.0', 'GNU-GPLv3','ISC', 'MIT',  'MPL-2.0']
        },
    ])
},