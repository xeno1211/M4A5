// Postmon: localhost:8000/api/v1/loan/
const LoanPayment = require('../models/loanPaymentModel');
const APIFeatures = require('../dataBaseManager/loanDbContext'); //Fix?
exports.getAllLoanPayments =   async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(LoanPayment.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const loanPayments = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: loanPayments.length,
        data: {
          loanPayments
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
  exports.getloanpayment = async (req, res) => {
    try {
      const loanPayments = await LoanPayment.findById(req.params.id);
      // loan.findOne({ _id: req.params.id })
  
      res.status(200).json({
        status: 'success',
        data: {
          loanPayments
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.createloanpayment = async  (req, res) => {
    try {
      // const newloan = new loan({})
      // newloan.save()
  
      const newloan = await LoanPayment.create(req.body);
  
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
  
  exports.updateloanpayment = async (req, res) => {
    try {
      const loan = await LoanPayment.findByIdAndUpdate(req.params.id, req.body, {
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
  
  exports.deleteloanpayment = async (req, res) => {
    try {
      await LoanPayment.findByIdAndDelete(req.params.id);
  
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