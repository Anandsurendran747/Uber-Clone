
const http = require('http')
const app = require('./app')
const {initializeSocket} = require('./socket');

const server = http.createServer(app);
initializeSocket(server);
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);

}) 
