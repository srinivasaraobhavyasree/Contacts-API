const http = require('http')


const server = http.createServer(handleRequest)

function handleRequest(request, responce){
    responce.writeHead(200,{'content-Type': 'text-plain'})

    responce.end("Welcome to entri elevate")
}

server.listen(3000, () => {
    console.log("server is running on 3000")
})