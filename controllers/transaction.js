const router = require('express').Router();
const Transaction = require("../models/Transaction");

// Get all transactions
router.get('/', (req, res) => {
    Transaction.find({})
        .then(data => {
            res.json(data) // convert to JSON
        })
        .catch(err => {
            console.log(err)
        })
})

// Get one transaction by ID
router.get('/:id', (req, res) => {
    Transaction.findById({ _id: req.params.id})
        .then(transaction => {
            res.json(transaction)
            console.log(transaction)
        })
        .catch(err => {
            console.log(err)
        })
})


// Post new transaction
router.post("/new", (req, res) => {
    let newTransaction = {
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date
    }
    Transaction.create(newTransaction)
        .then(newTransaction => {
            res.json(newTransaction)
        })
        .catch(err => {
            console.log(err)
        })
})

// Edit transaction by Id
router.put("/edit/:id", (req, res) => {
    let updatedTransaction = {
        amount: req.body.amount,
        category: req.body.amount,
        date: req.body.date
    }
    Transaction.findOneAndUpdate({ _id: req.params.id }, updatedTransaction)
    .then(transaction => {
        res.json(transaction)
        console.log(transaction)
    })
    .catch(err => {
        console.log(err)
    })
})

// Delete transaction by Id
router.delete('/delete/:id', (req, res) => {
    Transaction.findByIdAndDelete({ _id: req.params.id })
        .then(transaction => {
            res.json(transaction)
            console.log(transaction)
        })
        .catch(err => {
            console.log(err)
        })
})
// TODO: Edit transaction

module.exports = router;