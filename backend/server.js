const express = require("express")
const app = express()
const cors = require("cors")
const member = require("./router/member")
const user = require("./router/user")
const paket = require("./router/paket")
const transaksi = require("./router/transaksi")
const {login} = require("./router/login")

app.use(cors())
app.use("/laundry1/api/member", member)
app.use("/laundry1/api/user", user)
app.use("/laundry1/api/paket", paket)
app.use("/laundry1/api/transaksi", transaksi)
app.use("/laundry1/api/auth", login)

app.listen(8000, () => {
    console.log('Server run on port 8000');
})