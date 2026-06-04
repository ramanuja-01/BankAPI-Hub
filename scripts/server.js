// BankAPI Hub - Dev Server Script
// Lightweight dependency-free development server

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Normalize URL path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  // Strip query parameters or hashes
  const cleanPath = filePath.split('?')[0].split('#')[0];
  
  // Resolve absolute path in workspace
  const absolutePath = path.join(path.resolve(__dirname, '..'), cleanPath);

  // Read file
  fs.readFile(absolutePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page/file not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 File Not Found</h1><p>BankAPI Hub Dev Server could not resolve this path.</p>', 'utf-8');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success response
      const ext = path.extname(cleanPath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('\n==================================================');
  console.log(`🚀 BankAPI Hub Server running at: http://localhost:${PORT}`);
  console.log('Press Ctrl+C to terminate server');
  console.log('==================================================\n');
});
