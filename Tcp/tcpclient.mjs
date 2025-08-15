import net from 'net'

const client = net.createConnection({port :5000},()=>{
    client.on('data',(data)=>{
        console.log('message received form server',data.toString())
    })
    client.write('hello ')
})
console.log("hello")
