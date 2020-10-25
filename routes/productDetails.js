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

router.get('/:id', async (req, res) => {
    try {
        const productById = await Product.findById(req.params.id)
        res.send(productById)
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

router.put("/:id", async (req, res, next) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body)
      if (product) {
        res.send("Ok")
      } else {
        const error = new Error(`product with id ${req.params.id} not found`)
        error.httpStatusCode = 404
        next(error)
      }
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res, next) => {
    try {
       const removedPost =  await Product.findByIdAndDelete(req.params.id)
       if (removedPost) {
        res.send("Deleted")
       }
       else {
        const error = new Error(`product with id ${req.params.id} not found`)
        error.httpStatusCode = 404
        next(error)
      }
    } catch(error) {
        next(error)
    }
})

module.exports = router