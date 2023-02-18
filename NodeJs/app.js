const http = require('http');
const routes = require("./route");
const port = 4000;

const server = http.createServer(routes.routes);
server.listen(port);