const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://Tapaswee2001Samantaray:jecky2001@cluster0.zinufff.mongodb.net/TapasweeDB1-mongoDBDayFirstPractice",
    {
      useNewUrlParser: true,
    },
    mongoose.set("strictQuery", true)
  )
  // mongoose.connect("mongodb+srv://abhishek9036:abhishek9036@abhishek9036.s0p4ddl.mongodb.net/abhishek9036-DB", {
  //     useNewUrlParser: true
  // } , mongoose.set("strictQuery" , true))
  // mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
  //     useNewUrlParser: true
  // })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
