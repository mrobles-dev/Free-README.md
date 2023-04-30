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
  questions,
  git
}) =>
  `
 ![${license}](https://img.shields.io/badge/License-${license}-blue.svg)

# ${title}

## Description
 ${descr}
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
${questions}

## License 
${license}
[![${license}](https://img.shields.io/badge/License-${license}-blue.svg)]


`;


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Title?",
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
      choices:[ "MIT", "Boost", "BSD", "Apache", "BSD-2"]
    },
    {
      type: "input",
      message: "What is your usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "What is your git?",
      name: "git",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your test command?",
      name: "test",
    },


  ])


  .then ((response) => {
    console.log (response);
    const newReadMe = readMe(response)
    fs.writeFile('./output/readme.md', newReadMe,
    
    (err) =>
    err ? console.log(err) : console.log('success'));

  })