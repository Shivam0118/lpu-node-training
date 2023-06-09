const express = require("express")
const app = express()

//JSON = JAVASCRIPT OBJECT NOTATION
//Objects (key: value)
app.use(express.json())
// req{
//    "a":3,
//    "b":4
//}

//res{
//    "sum":7,
//}
//Get, POST, PUT, DELETE API

function addNums(req, res){
    if(req.query.a==null || req.query.b==null){
        res.status(400).send({error: "Numbers are given null"})
    }
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const name = req.query.name;
    console.log(name);
    const sum = a+b;
    res.status(200).send(
        {
            "sum": sum
        }
    );

}
app.get('/addTwoNums',addNums)

// Sockets/Port numbers
// IP + Port = Socket
const port = 3001
const ip = "localhost"

app.listen(port, ip, function(){
    console.log("I am listening");
})