
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import apiRoutes from './api'

function buildExpress () {
  const server = express()

  server.use(cookieParser())
  server.use(bodyParser.json())

  server.get('/healthcheck', (_req, res) => {
    res.json({ status: 'OK' })
  })

  // * API routing funneled through here
  server.use('/api', apiRoutes)

  return server
}

export default buildExpress()
