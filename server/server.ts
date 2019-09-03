
/* istanbul ignore file */

import chalk from 'chalk'

import application from './next'

import config from './config'

const { port } = config

async function listen () {
  const app = await application

  return app.listen(port, () => {
    console.log(
      `Server listening on ${chalk.magenta(`http://localhost:${port}`)} in ${chalk.cyan(config.env)} 🌎...`
    )
  })
}

export default listen()
