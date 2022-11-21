const { Resolver } = require('@parcel/plugin')
const path = require('path')
const fs = require('fs')

module.exports = new Resolver({
  async resolve({ specifier, options: { projectRoot } }) {
    const extensions = ['js', 'jsx', 'ts', 'tsx']

    for (const ext of extensions) {
      const filePath =  path.join(projectRoot, 'src', `${specifier}.${ext}`)
      if (fs.existsSync(filePath)) {
        return { filePath }
      }

      const indexFilePath =  path.join(projectRoot, 'src', `${specifier}/index.${ext}`)
      if (fs.existsSync(indexFilePath)) {
        return { filePath: indexFilePath }
      }
    }

    return null
  }
})
