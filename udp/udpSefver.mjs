import dgram from 'dgram';

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
    console.log(`Received from client: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);

    const reply = Buffer.from('Hello from server');
    socket.send(reply, rinfo.port, rinfo.address, (err) => {
        if (err) console.error('Error sending message:', err);
        else console.log('Reply sent to client');
    });
});

socket.bind(5000, () => {
    console.log('UDP server listening on port 5000');
});
