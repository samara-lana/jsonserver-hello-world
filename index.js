// Desenvolvimento de Interfaces Web
//
// Esse módulo implementa uma API RESTful baseada no JSONServer
// O projeto está disponível em: 
// https://github.com/wcipriano/jsonserver-hello-world
// Autor: Wagner Cipriano
// Data: 02/12/2024

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')

// Permitir que os dados sejam alterados: readOnly = false.
const middlewares = jsonServer.defaults(readOnly = false);

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log("JSON Server está em execução: jsonserver-hello-world");
})
