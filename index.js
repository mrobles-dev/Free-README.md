const inquirer = require("inquirer");
const fs = require("fs");


const readMe = ({
  title,
  descr,
  installation,
  usage,
  license,
  contributing,
  tests,
  email,
  git,
}) =>
  `
 ![${license}](https://img.shields.io/badge/License-${license}-blue.svg)

# ${title}

## Description
 ${descr} 

 See Github for more info:

 [${git}](https://github.com/${git})

## Installation
 ${installation}


## Table of contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage  
${usage}


## Contributing
${contributing} 

## Tests

${tests}

## Questions
Contact at:

[${email}](mailto:${email})


## License 
${license}
[![${license}](https://img.shields.io/badge/License-${license}-blue.svg)]


`;


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Project Title?",
      name: "title",
    },

    {
      type: "input",
      message: "What is your description?",
      name: "descr",
    },
    {
      type: "list",
      message: "What badges would you like to ?",
      name: "license",
      choices: ["MIT", "Boost", "BSD", "Apache", "BSD-2"],
    },
    {
      type: "input",
      message: "What would you like to say about the contributions?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What would you like to say about the usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "git",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your test command?(ie npm run test)",
      name: "tests",
    },
  ])

  .then((response) => {
    console.log(response);
    const newReadMe = readMe(response);
    fs.writeFile(
      "./output/readme.md",
      newReadMe,

      (err) => (err ? console.log(err) : console.log("success"))
    );
  });