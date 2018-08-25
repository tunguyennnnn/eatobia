import express from 'express'
import bodyParser from 'body-parser'
import expressWinston from 'express-winston'
import compress from 'compression'
import cors from 'cors'
import logger from 'morgan'
import path from 'path'
import cluster from 'cluster'
import winstonInstance from './winston'
import os from 'os'

if (cluster.master) {
  const cpuCount = os.cpus().length
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  const app = express()
  const server = require('http').createServer(app)

  server.listen(3000, () => {
    console.log('app listen to port 4000')
  })

  app.use(logger('dev'))
  app.all('*', cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(compress())
  expressWinston.requestWhitelist.push('body')

  app.use(expressWinston.logger({
    winstonInstance,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true
  }))

  app.use(express.static(path.join(__dirname, '../public')))
}
