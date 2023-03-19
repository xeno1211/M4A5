// Postmon: localhost:8000/api/v1/loan/
const Customer = require('../models/customerModel');
const APIFeatures = require('../dataBaseManager/loanDbContext'); //Fix?
exports.getAllcustomers =   async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Customer.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const customers = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
          customers
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail on get all',
        message: err
      });
    }
  };
  
  // Postmon: localhost:8000/api/v1/loan/63fc33291c15cb835f5ffd3a
  exports.getcustomer = async (req, res) => {
    try {
      const customers = await Customer.findById(req.params.id);
      // loan.findOne({ _id: req.params.id })
  
      res.status(200).json({
        status: 'success',
        data: {
          customers
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.createcustomer = async  (req, res) => {
    try {
      // const newloan = new loan({})
      // newloan.save()
  
      const newloan = await Customer.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          loan: newloan
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.updatecustomer = async (req, res) => {
    try {
      const loan = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          loan
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.deletecustomer = async (req, res) => {
    try {
      await Customer.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  //**Code  END