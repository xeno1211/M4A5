const mongoose = require('mongoose')

const loanPaymentSchema = new mongoose.Schema({
    paymentAmount: {
        type: Number,
        required: [true, 'Need loan amount']
    },
    loanID: {
        type: String,
        required: [true, 'Need loan ID']
    },
    interest: {
        type: Number
        //required: [true, 'Need loan ID']
    },
    principle: {
        type: Number
        //required: [true, 'Need loan ID']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean
        
    }
})

const LoanPayment = mongoose.model('LoanPayment', loanPaymentSchema)
module.exports = LoanPayment