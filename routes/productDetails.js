const express = require('express')

const router = express.Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(req.query)
        res.send(products)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
   
    try {
    const newProduct = new Product(req.body);
    const addProduct = await newProduct.save()
    console.log(addProduct)
        res.status(201).send(addProduct)
    } catch (error) {
        console.log(error)
        next(error)
    }
  
})

module.exports = router