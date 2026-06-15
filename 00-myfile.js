const http=require('http');
const {readFileSync, read}=require('fs');
//get all files
const homepage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeLogic=readFileSync('./navbar-app/browser-app.js')
const homeLogo=readFileSync('./navbar-app/logo.svg')

const server=http.createServer((req,res)=>{
// console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })//status code first argumentb second content type
    res.write(homepage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeLogo)
    res.end()
  }
  //browser app
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404 
  else {
    res.writeHead(404, { 'content-type': 'text/html' })// text/plain will return only plain text at the brower
    res.write('<h1>page not found</h1>')
    res.end()
  }//mozerlla for http
})
server.listen(5000,()=>{
  console.log('server is listening on port 5000....')
})