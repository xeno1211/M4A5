const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name']
    },
    firstName: {
        type: String,
        required: [true, 'A customer name must have a name']
    },
    middleName: {
        type: String,
        required: [true, 'A customer name must have a name']
    },
    lastName: {
        type: String,
        required: [true, 'A customer name must have a name']
    },
    DOB: {
        type: String,
        required: [true, 'Need a DOB']
    },
    gender: {
        type: String,
        required: [true, 'Need gender']
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
        type: Boolean,
        default: false
        
    }
    
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer