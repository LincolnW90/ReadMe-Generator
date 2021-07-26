const fs = require('fs');

// begin page data creation
function createFile(fileContent) {

    // if table of contents needed
    const createTable = () =>{
        if (!answers.confirmTable){
            return ''
        }
        return `
        ## Table of contents
        
        * [Installation](#installation)
        * [Usage](#usage)
        * [Tests](#tests)
        * [License](#license)
        * [Questions](#questions)
        * [Credits](#credits)
        `
    };

    // generate license badge
    const badgeMaker = () => {
        if (!answers.confirmLicense || (answers.license = 'other')){
            return ''
        }
        return `![License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue)`
    } 

    return `
    ${badgeMaker}

    #${answers.title} ReadMe

    ## Description

    ${answers.description}
    
    ${createTable}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Tests
    ${answers.tests}

    ## Licenses
    ${answers.licenses}

    ## Questions
    Github username: ${answers.userName}
    Email: ${answers.email}

    ## Contributors/technology
    ${answers.contributor}
    `
};

module.exports = createFile;