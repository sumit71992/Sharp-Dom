const http = require('http');
const port = 4000;

const rqListener=(req,res)=>{
    console.log("Sumit")
}
const server = http.createServer(rqListener);
server.listen(port);