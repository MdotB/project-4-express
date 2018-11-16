const router = require('express').Router();
const { Transaction } = require("../models/Transaction");
const mongoose = require('mongoose');

// Get all transactions
router.get('/', (req, res) => {
    Transaction.find({})
        .then(data => {
            // convert to JSON
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/new", (req, res) => {
    let newTransaction = {
        amount: req.body.amount,
        category: req.body.cateogry
    }
    Transaction.create(newTransaction)
        .then(newTransaction => {
            res.json(newTransaction)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;