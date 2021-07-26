const inquirer = require('inquirer');
const createFile = require('./utils/generatePage');
const fs = require('fs');


// get author information
const promptQuestions = answers => {
    // create answers array if none exixts
    if (!answers){
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
        {   //contributors Y/N
            type: 'confirm',
            name: 'confirmContributor',
            message: 'Do you have any contributors or technology to credit?',
            default: false
        },
        {   //contributor name
            type: 'input',
            name: 'contributor',
            message: 'enter contributor GitHub username or technology used (required)',
            when: ({confirmContributor}) => confirmContributor,
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
            message:'Enter any special installation instructions'
        },
        {   //usage information
            type:'input',
            name:'usage',
            message: 'Enter any usage instructions or links to instructions'
        },
        {   //tests
            type: 'input',
            name: 'tests',
            message: 'Enter any special test info or instructions'
        },
        {   //licenses Y/N
            type:'confirm',
            name:'confirmLicense',
            message:'Would you like to add licences?',
            default: true
        },
        {   //licenses
            type: 'checkbox',
            name: 'license',
            message: 'Select which license is in use',
            choices: ['Apache-2.0', 'GNU-GPLv3','ISC', 'MIT',  'MPL-2.0', 'other'],
            when: ({confirmLicense}) => confirmLicense
        },
    ])
};


promptQuestions()
.then(function writeToFile(fileContent){
    var formatReadMe = createFile(fileContent);

    fs.writeFileSync('./dist/README.md', formatReadMe);
})
.catch(err => {
    console.log(err);
});