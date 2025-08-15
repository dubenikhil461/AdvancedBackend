import net from 'net'

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data)
        console.log(data.toString())
    })
    socket.write('hello from server')
})

server.listen(5000,()=>{
    console.log("listeing on port 5000")
})

server.on('end',()=>{
    console.log('disconnected clients')
})