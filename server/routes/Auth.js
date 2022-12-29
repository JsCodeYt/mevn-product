const jwt = require("jsonwebtoken")
const router = require("express").Router()
const userModel = require("../models/User")

router.post("/register", async (req, res) => {
    try {
        console.log(req.body)
        const newUser = await userModel.create({ ...req.body })
        const userToken = await jwt.sign({ newUser }, "secret")
        res.status(201).json({
            status: "ok",
            message: "Muvaffaqiyatli ro'yhatdan o'tdingiz !",
            user: newUser,
            token: userToken
        })
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ username: req.body.username })
        const token = await jwt.sign({ ...req.body }, "secret")
        res.status(200).json({
            message: "Muvaffaqiyatli ro'yhatdan o'tdingiz !s",
            status: "ok",
            user: { ...user._doc },
            token,
        })
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get("/user", async (req, res) => {
    try {
        const token = req.headers.authorization
        const user = await jwt.verify(token, "secret")
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router