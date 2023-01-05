/* Global Async
* di .mjs asynchronous bisa bersifat global
* secara default behavior nya async function
*/

function samplePromise() {
    return Promise.resolve("Janji ditepati!")
}

const makePromise = await samplePromise()
console.info(makePromise)