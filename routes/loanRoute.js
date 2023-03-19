//Routes
const express = require('express')
const router = express.Router()
const loanController = require('../controllers/loanController')

router.route('/')
    .get (loanController.getAllloans)
    .post(loanController.createloan)
    

router.route('/:id')
    .get(loanController.getloan)
    .patch(loanController.updateloan)
    //.put(loanController.updateDataByID)
    .delete(loanController.deletloan)


module.exports = router
