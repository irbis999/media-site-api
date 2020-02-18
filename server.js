const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db')
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000
// const port = 4000

server.use(middlewares)
server.use(router)

server.listen(port)
