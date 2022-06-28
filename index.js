const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const clients = [{'id': 1, 'name':'DocomoPacific', 'deviceCount': 10},
    {'id': 2, 'name':'Airtel', 'deviceCount': 12},
    {'id': 3, 'name':'Samsung', 'deviceCount': 14}]

app.get("/", function(req, res) {
        res.send({data:clients});
  });
app.get("/myval", function(req, res) {
    const id = req.query.id;
    console.log("------", id)
    const client = clients.find(x => x.id == id);
    res.send({data:client});
});

app.post("/", function(req, res) {
    res.send("This is a post request!!\n");
  });
        

const port = 9000
app.listen(port,() => {
    console.log("Hi Jo Server started")
})


