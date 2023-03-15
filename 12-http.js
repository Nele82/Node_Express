const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home Page!')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oooops!</h1>
    <p>We cannot seem to find the page You are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)