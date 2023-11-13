const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const fs = require('fs');
const e = require('express');

const colorblindPrefix = "/colorblind_friendly_tester"
//const colorblindPrefix = ""

app.use(colorblindPrefix + '/public', express.static(process.cwd() + '/public'));


// app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));

app.get(colorblindPrefix + "/", function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server is running!");
});
