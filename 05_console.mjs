import { Console } from "console"
import fs from "fs"

const file = fs.createWriteStream("app.log")

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello World")
log.error("World Error")

const person = {
    firstName: "Ujang",
    lastName: "Kasep",
}

log.table(person)