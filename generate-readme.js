/* script for generating docs example table */
const fs = require('fs')
const path = require('path')
const url = require('url')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    /* In README.md the below comment block adds the list to the readme
    <!-- AUTO-GENERATED-CONTENT:START (EXAMPLES_TABLE)-->
      community examples list will be generated here
    <!-- AUTO-GENERATED-CONTENT:END -->
     */
    EXAMPLES_TABLE() {
      const exampleFile = path.join(__dirname, 'examples.json')
      const examples = JSON.parse(fs.readFileSync(exampleFile, 'utf8'))

      // Make table header
      let md = '| Example | Author |\n'
      md += '|:-------|:------:|\n'
      // Sort alphabetically
      examples.sort((a, b) => {
        return a.name < b.name ? -1 : 1
      }).forEach((data) => { // eslint-disable-line
        // add table rows
        const repoUrl = (Array.isArray(data.code)) ? data.code[0] : data.code
        const link = (data.url) ? ` [view the project](${data.url})` : ''
        const userName = username(repoUrl)
        const profileURL = `http://github.com/${userName}`
        md += `| **[${formatPluginName(data.name)}](${repoUrl})** <br/>`
        md += ` ${data.description}${link} | [${userName}](${profileURL}) |\n`
      })
      return md.replace(/^\s+|\s+$/g, '')
    },
  },
}


const markdownPath = path.join(__dirname, 'README.md')

// run md-magic
markdownMagic(markdownPath, config, () => {
  console.log('Docs updated!')
})

// util functions
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

function formatPluginName(string) {
  return toTitleCase(string.replace(/-/g, ' '))
}

function username(repo) {
  if (!repo) {
    return null
  }

  const o = url.parse(repo)
  var urlPath = o.path

  if (urlPath.length && urlPath.charAt(0) === '/') {
    urlPath = urlPath.slice(1)
  }

  urlPath = urlPath.split('/')[0]
  return urlPath
}
