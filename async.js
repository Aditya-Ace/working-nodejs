const https = require("https")

/* 
    Since these https request operations are handled by the OS Async network request handler, that request is forwarded to the OS by libuv. We  don't have limitations of thread here and can run multiple request directly by the OS itself.
    All the requests are handled almost immediate by the OS no thread boundary
 */

const start = Date.now()
function makeRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {})
      res.on("end", () => {
        console.log(Date.now() - start)
      })
    })
    .end()
}

makeRequest()
makeRequest()
makeRequest()
makeRequest()
makeRequest()
makeRequest()
