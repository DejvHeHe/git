const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use("/api",require("./controller/shopList"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

