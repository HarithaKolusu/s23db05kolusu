const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    name :String,
    id : Number,
    price : Number
})
module.exports = mongoose.model("orders", orderSchema)