//Event loop is what allows node.js to perform non-blocking i/o operations -dispite
//the fact that jaascript.
//javascript is single threaded --by offloading operations to the system kenal whenever posible
// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page')
//   }
//   if (req.url === '/about') {
//     // blocking code
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`)
//       }
//     }
//     res.end('About Page')
//   }
//   res.end('Error Page')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Home Page</h1> <br>go about <a href="/about">about</a> <br> <a href="/contact">contact</a>')
  }
  else if (req.url === '/about') {
    res.end('<h1>About Page</h1> back to <a href="/">Home</a>')
  }
  else if(req.url === '/contact') {
    res.end("<h1>Contact Page</h1> back to <a href='/about'>about</a>")
  }
  else {
    res.end('<h1>Error Page</h1> back to <a href="/">Home</a>')
  }
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
