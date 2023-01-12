/** Cluster
 * secara default Node JS berjalan di single thread
 * cluster bisa menjalankan beberapa process Node JS secara sekaligus (multiprocess)
 * 
 * di dalam Cluster terdapat 2 jenis aplikasi, Primary & Worker
 * Primary - sebagai koordinator atau manajer untuk para Worker
 * Worker - aplikasi yang menjalankan tugas nya
 */

import cluster from "cluster"
import os from "os"
import http from "http"

if (cluster.isPrimary) {
    console.info(`primary : ${process.pid}`)
    // cluster.fork() //jalankan worker
    console.info(`CPU size ${os.cpus().length}`)
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork() //jalankan worker
    }
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`)
        cluster.fork() //jalankan worker baru
    })
}

if (cluster.isWorker) {
    console.info(`worker : ${process.pid}`)

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`)
        response.end()
        process.exit()
    })

    server.listen(3000)

    console.info(`Start cluster worker ${process.pid}`)
}