'use strict'

hexo.extend.filter.register('before_deploy', () => {
  const fs = require('fs')
  const path = require('path')
  const nojekyllPath = path.join(hexo.public_dir, '.nojekyll')
  if (!fs.existsSync(nojekyllPath)) {
    fs.writeFileSync(nojekyllPath, '')
    hexo.log.info('Created .nojekyll in public directory')
  }
})
