const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const RegisterDealer = mongoose.model('RegisterDealer');

//post the dealer Info and save dealer to the database
router.post('/', (req, res, next) => {
    var registerDealer = new RegisterDealer();
    registerDealer.DealerName = req.body.DealerName;
    registerDealer.Address = req.body.Address;
    registerDealer.Email = req.body.Email;
    registerDealer.ContactNumber = req.body.ContactNumber;
    registerDealer.City = req.body.City;
    registerDealer.State = req.body.State;
    registerDealer.ContactKeyPerson = req.body.ContactKeyPerson;
    registerDealer.ContactKeyPersonName = req.body.ContactKeyPersonName;
    registerDealer.ContactKeyPersonMobileNumber = req.body.ContactKeyPersonMobileNumber;
    registerDealer.GSTnumber = req.body.GSTnumber;
    registerDealer.PANnumber = req.body.PANnumber;
    registerDealer.OtherDetails = req.body.OtherDetails;
    registerDealer.AreaOfOperation = req.body.AreaOfOperation;
    registerDealer.EmployeeStrength = req.body.EmployeeStrength;
    registerDealer.AnyOtherInfo1 = req.body.AnyOtherInfo1;
    registerDealer.AnyOtherInfo2 = req.body.AnyOtherInfo2;
    registerDealer.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    console.log('Inside Reg Function..');
});

module.exports = router;