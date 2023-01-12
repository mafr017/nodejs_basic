import http from "http"

const server = http.createServer((request, response) => {

    console.info(request.method)
    console.info(request.url)
    // console.table(request.headers)

    if (request.method == "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json")
            if (request.url == "/panggil") {
                var obj = JSON.parse(data)
                response.write(`Ujang... dipangil ${obj.user}!!\n`)
            } else {
                response.write(data)
            }
            response.end()
        })
    } else {
        if (request.url == "/panggil") {
            response.write("Ujang... dipangil user!!\n")
        } else {
            response.write("\n\nHello HTTP Server")
        }
        response.end()
    }
})

server.listen(3000)