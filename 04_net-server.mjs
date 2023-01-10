import net from "net";

var user = 0

console.info(`Server running... 🔰`)

const server = net.createServer((client) => {
    user++
    console.info(`Client Connected ${user} 🟢\n`)

    client.addListener("data", (data) => {
        console.info(`Receive data ${data.toString()}`)
        client.write(`Hello ${data.toString()}\r\n`)
    })

    client.addListener("end", (data) => {
        console.info(`Client Disconnected 🔴\n`)
        user--
        console.info(`Client Connected ${user} 🟢\n`)
    })
})

server.listen(3000, "localhost")