const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const options = {
    index: "index.html"
};
app.use(express.static('build', options));

io.on('connection', (socket) => {
    console.log(`Client connected. Id=${socket.id}`);
    socket.on('CLIENT_TRIGGER', msg => {
        const binaryData = decimalToArray(msg.data);
        const formattedData = formatBinaryToLog(binaryData);
        console.log(`Client Id=${socket.id}, ${formattedData}`)
    });
    socket.on('disconnect', function () {
        console.log(`Client disconnected. Id=${socket.id}`);
    });
});

function decimalToArray(a) {
    let b = [];
    for (let i = 0; i < 8; i++)
        b[i] = (a >> i) & 1;
    return b;
}

function formatBinaryToLog(arr) {
    return `Up: ${arr[0]}, Down: ${arr[1]}, Left: ${arr[2]}, Right:${arr[3]}, A: ${arr[4]}, B: ${arr[5]}`
}

http.listen(port, () => {
    console.log(`Socket server running at http://localhost:${port}/`);
});