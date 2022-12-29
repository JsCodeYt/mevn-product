const express = require("express")
const cors = require("cors")
const authRouter = require("./routes/Auth")
const mongoose = require("mongoose")
const productRouter = require("./routes/product")

const app = express()
require("dotenv").config()

app.use(cors({ origin: "*" }))
app.use(express.json())


app.use('/api/auth', authRouter)
app.use("/api/product", productRouter)

app.listen(process.env.PORT, () => {
    try {
        mongoose.connect("mongodb://localhost:27017/texnomart")
        console.log("connect to Backend !")
    } catch (err) {
        console.log(err)
    }
})