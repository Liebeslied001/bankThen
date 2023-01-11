const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    cat_id:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Transaction',transactionSchema)