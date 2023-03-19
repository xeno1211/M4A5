// Postmon: localhost:8000/api/v1/loan/
const Loan = require('./../models/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');
exports.getAllloans =   async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Loan.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const loans = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
          loans
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
  exports.getloan = async (req, res) => {
    try {
      const loans = await Loan.findById(req.params.id);
      // loan.findOne({ _id: req.params.id })
  
      res.status(200).json({
        status: 'success',
        data: {
          loans
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.createloan = async  (req, res) => {
    try {
      // const newloan = new loan({})
      // newloan.save()
  
      const newloan = await Loan.create(req.body);
  
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
  
  exports.updateloan = async (req, res) => {
    try {
      const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
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
  
  exports.deletloan = async (req, res) => {
    try {
      await Loan.findByIdAndDelete(req.params.id);
  
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