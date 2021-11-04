const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to my page')
    }
    if (req.url === '/about') {
        res.end('This is our short history')
    }
    res.end(`
    <h1>Oops!!</h1>
<p>Sorry, Page not found.</p>
<a href="/">Back home</a>
    `)

})

server.listen(5000)