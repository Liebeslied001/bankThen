const express = require("express")
const transactionSchema = require("../models/transaction")
const router = express.Router()

//create transaction
router.post("/transactions",(req,res)=>{
    const transaction = transactionSchema(req.body)
    transaction
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

//get all transactions
router.get("/transactions",(req,res)=>{
    transactionSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//get a transaction
router.get("/transactions/:id",(req,res)=>{
    const { id } = req.params
    transactionSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})

//delete a transaction
router.delete("/transactions/:id",(req,res)=>{
    const { id } = req.params
    transactionSchema
        .remove(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}))
})


module.exports = router