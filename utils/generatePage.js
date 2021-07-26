function createFile(fileData) {
    // create badge for license if available
const badgeMaker = () => {
    if (fileData.license) {
        return (`![License](https://img.shields.io/static/v1?label=License&message=${fileData.license}&color=blue)`)
    } return;
};
// Table of contents
const tableOfContents = () => {
    if (fileData.confirmTable) {
        return `
## Table of Contents
---
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions/Contact](#questions)
`;
};
};

// start writing
return `
${badgeMaker()}
# ${fileData.title}
## Description
---
${fileData.description}
${tableOfContents()}
## Installation
---
${fileData.installation}
## How to use
---
${fileData.usage}
## Tests
---
${fileData.tests}
## License
---
${fileData.license}
## Contributors/technology
---
${fileData.contributor}
### Questions
---
Please direct any questions to...

Github profile: ${fileData.userName}

Email: ${fileData.email}`

};




module.exports = createFile;