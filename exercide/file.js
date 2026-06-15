const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

const custom = new EventEmitter();

// 1. Define the Event Listener FIRST (Outside the server)
custom.on('analyzeLogs', (res) => {
    const fileStream = fs.createReadStream('./server.log', 'utf-8');

    fileStream.on('data', (chunk) => {
        // Split the chunk into individual lines
        const lines = chunk.split('\n');
        
        // Loop through each line and find the ones with "ERROR"
        lines.forEach((line) => {
            if (line.includes('ERROR')) {
                res.write(line + '\n'); // Stream matching lines to the client
            }
        });
    });

    // When the file is completely read, close the HTTP connection
    fileStream.on('end', () => {
        res.end();
    });

    // Handle file reading errors gracefully
    fileStream.on('error', (err) => {
        res.statusCode = 500;
        res.end('Error reading log file.');
    });
});

// 2. Create the Server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our webpage');
    } 
    else if (req.url === '/error') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // 3. EMIT the event when the user hits this URL, passing 'res'
        custom.emit('analyzeLogs', res);
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
