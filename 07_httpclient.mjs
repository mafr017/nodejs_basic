import https from "https"

const url = "https://app.fmyinvitation.com/api/invitation/v1/wish/get"
const request = https.request(url, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
}, function (response) {
    response.addListener("data", function (data) {
        console.info(`Receive : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    "invitation": "nikah"
})

request.write(body)
request.end()