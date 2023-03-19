//Routes
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.route('/')
    .get (customerController.getAllcustomers)
    .post(customerController.createcustomer)
    

router.route('/:id')
    .get(customerController.getcustomer)
    .patch(customerController.updatecustomer)
    //.put(customerController.updateDataByID)
    .delete(customerController.deletecustomer)


module.exports = router
