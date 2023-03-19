//Routes
const express = require('express')
const router = express.Router()
const loanPaymentController = require('../controllers/loanPaymentController')

router.route('/')
    .get (loanPaymentController.getAllLoanPayments)
    .post(loanPaymentController.createloanpayment)
    

router.route('/:id')
    .get(loanPaymentController.getloanpayment)
    .patch(loanPaymentController.updateloanpayment)
    //.put(loanPaymentController.updateDataByID)
    .delete(loanPaymentController.deleteloanpayment)


module.exports = router
