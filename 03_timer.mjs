/* Timer
*/
import timers from "timers/promises";

var name

console.info(`Tunggu 5 detik bro ${name}`)
name = await timers.setTimeout(5000, "ujang")
console.info(`Tunggu 5 detik bro ${name}\n`)

setInterval(() => {
    console.info(`Start time at ${new Date()}`);
}, 1000)