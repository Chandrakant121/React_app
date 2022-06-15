const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    tag: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
})
const Product = mongoose.model("product", productSchema);
module.exports = Product;