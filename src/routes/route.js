const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const wel=require('../logger/logger.js')
const ddmmyy=require('../util/helper.js')
const opestr=require('../validator/formatter.js')
const employee = require('./employee')
const _ = require('underscore')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
/*Assignment 1 Call.............................................................................*/
    wel.welcome("Abhishek Chauhan");

/*Assignment 2 Call.............................................................................*/
    ddmmyy.printDate();
    ddmmyy.printMonth();
    ddmmyy.getBatchInfo();

/*Assignment 3 Call.............................................................................*/
    opestr.trimMethod();
    opestr.changetoLowerCase();
    opestr.changeToUpperCase();


    res.send('any dummy text')
});



router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;