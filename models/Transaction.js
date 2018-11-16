const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transaction = new Schema({
    amount: Number,
    category: String,
})

module.exports = {
    Transaction: Transaction
}