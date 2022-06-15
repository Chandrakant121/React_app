const Product = require("../models/product");
const express = require("express");
const router = express.Router();
//CRUD

//POST

router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product)
    } catch (err) {
        return res.status(400).send({
            status: "Failure",
            msg: err.message
        })
    }
})

//GET

router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pagesize = 10;
        const skip = (page - 1) * pagesize;
        const filtering = req.query.filter.split(",");
        const filterorder = filtering[1] || "";
        const filterby = filtering[0] || "";
        let sortby = sorting[0] || "_id";
        const sorting = req.query.sort.split(",");
        const count = await Main.find({ [filterby]: filterorder }).count({});
        const product = await Main.find({ [filterby]: filterorder }).sort({ [sortby]: +sorting[1] }).skip(val).limit(limit).lean().exec();
        return res.status(200).send({
            products: product,
            count: count
        });
    }
    catch (err) {
        return res.status(400).send({
            status: "Failure",
            msg: err.message
        })
    }
})

//PATCH

router.patch("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send("error");
    }
});

//DELETE

router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send("error");
    }
});

module.exports = router;