const fs = require('fs');

// if table of contents needed
const createTable = () =>{
    if (!answers.confirmTable){
        return ''
    }
    return `
    ## Table of contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
    * `
};

// generate license badge
const badgeMaker = () => {
    if (!projectData.confirmLicense || (projectData.license = 'other')){
        return ''
    }
    return `![License](https://img.shields.io/static/v1?label=License&message=${projectData.license}&color=blue)`
} 

// begin page data creation
const writeFile = fileContent => {
    return `
    ${badgeMaker}

    #${projectData.title} ReadMe

    ## Description

    ${projectData.description}
    
    ${createTable}
    

    `
};

module.exports = writeFile;