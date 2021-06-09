//Test your might
//Before running the code, find out the order of the code execution
const OS = require("os")
process.env.UV_THREADPOOL_SIZE = OS.cpus().length
const https = require("https")
const crypto = require("crypto")
const fs = require("fs")

const start = Date.now()

function makeRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {})
      res.on("end", () => {
        console.log("Request:", Date.now() - start)
      })
    })
    .end()
}

function createHash() {
  crypto.pbkdf2("aditya", "tiwari", 100000, 512, "sha512", () => {
    console.log("Hash", Date.now() - start)
  })
}

makeRequest()
fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start)
})
createHash()
createHash()
createHash()
createHash()
