const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')


    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)


    // res.send('any dummy text')

router.get('/popular-webseries', function (req, res) {
    const webSeries =  ["Mirjapur", "Hostel Daze", "Girls Hostel", "Kota Factory", "Mission MBBS", "Aspirants"];
    res.send(webSeries);
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;