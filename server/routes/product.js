const router = require('express').Router()
const products = require("../data/products.json")
const thisProduct = require("../data/product")

router.get("/", async (req, res) => {
    try {
        res.send(products)
    } catch (error) {
        return res.status(500).json(error)
    }
})


router.get("/:id", async (req, res) => {
    try {
        res.status(200).json(thisProduct.filter(item => item.id == req.params.id))
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router