function renderLicenseBadge(license) {
    if (!license) return '';
    return '![License Badge](https://img.sheilds.io/badge/license-${encodeURIComponent(license)-blue.svg)';
}

function renderLicenseLink(license) {
    if (!license) return '';
    return 'https://opensource.org/licenses/${license}';
}

function renderLicenseSection(license) {
    if (!license) return '';
    return '## License\nThis project is licensed under the ${license} license. More information can be found at [${license}](${renderLicenseLink(license)}).';
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out to me.

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;