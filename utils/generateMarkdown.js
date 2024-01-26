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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;