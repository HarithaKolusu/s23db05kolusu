const mongoose = require("mongoose")
const OrdersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure length of Orders between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    id: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid id! id must be a non-negative number.`,
        },
    },
    price: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid price! Price must be a non-negative number.`,
        },
    },
})
module.exports = mongoose.model("Orders", OrdersSchema)