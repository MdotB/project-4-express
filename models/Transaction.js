const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Transaction = new Schema({
    amount: Number,
    category: String,
    date: Date
})

module.exports = mongoose.model('Transaction', Transaction)