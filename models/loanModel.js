const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    loanAmount: {
        type: Number,
        required: [true, 'Need loan amount']
    },
    interest: {
        type: Number,
        required: [true, 'Need interest']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'Need loan term']
    },
    loanType: {
        type: String,
        required: [true, 'Need type']
    },
    startDate: {
        type: Date,
        default: Date.now
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

const Loan = mongoose.model('Loan', loanSchema)
module.exports = Loan