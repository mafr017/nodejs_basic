import https from "https"

const url = "https://hookb.in/NOG6NXJZDwieDp6eRNoG"
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, function (response) {
    response.addListener("data", function (data) {
        console.info(`Receive : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: "Ujang",
    lastName: "Kasep",
})

request.write(body)
request.end()