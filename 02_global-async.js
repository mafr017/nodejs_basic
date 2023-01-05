/* Global Async
* Contoh asynchronous di .js
*/

function samplePromise() {
    return Promise.resolve("Janji ditepati!")
}

async function run() {
    const makePromise = await samplePromise()
    console.info(makePromise)
}

run()