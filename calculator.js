//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/",function(req,res){
    
    var num1=req.body.num1;
    var num2=req.body.num2;
    var result = num1+num2;

    res.send("The result of the calculation is "+ result);
});


app.listen(8000,function(){
    console.log("server is running on port 8000");
});