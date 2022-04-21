// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      case 'ISC':
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
      case 'IPL':
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
      case 'MPL':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'IPL':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'MPL':
      return 'https://opensource.org/licenses/MPL-2.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}\nThis project is available under the ${license}. For licensing details see [LICENSE](${renderLicenseLink(license)}).`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

## **Table of Contents**
---
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#contributions)
6. [Tests](#tests)
7. [Author](#author)

## **Description**
---
${data.description}

## **Installation**
---
${data.installation}

## **Usage**
---
${data.usage}

## **Contributions**
---
${data.contribution}

## **Tests**
---
${data.tests}

## **Author**
---
${data.username}

## **License**

${renderLicenseSection(data.license)}`;
}

module.exports =  {
  generateMarkdown: generateMarkdown
};
