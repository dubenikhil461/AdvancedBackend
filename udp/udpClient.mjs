import dgram from 'dgram'
const socket = dgram.createSocket('udp4')

socket.on('message', (msg, info) => {
    console.log('Received from server:', msg.toString(), 'from', info.address, ':', info.port);
});
socket.send('hello', 5000, 'localhost', (err) => {
    if (err) {
        console.error('Error sending message:', err);
        socket.close();
    } else {
        console.log('Message sent to server');
    }
});
