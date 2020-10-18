const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const mongoose= require('./db');
var rout= require('./routercontroller/taskcontroller');

const app=express();

var port =3000;

app.get('/',(req,res)=>{
    res.send("its working")
});

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyparser.json());
app.use('/tasks',rout);
app.listen(port,()=>{console.log("server started at port:"+port)});
