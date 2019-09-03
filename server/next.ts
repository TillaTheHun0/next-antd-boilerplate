
/* istanbul ignore file */

import next from 'next'

import server from './express'

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

async function mountNext () {
  const app = next({ dev: isDev })

  await app.prepare()

  // Next.js magic
  server.get('*', (req, res) => app.getRequestHandler()(req, res))

  return server
}

export default mountNext()
