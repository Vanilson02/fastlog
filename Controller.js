const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let user = models.User;
let tracking = models.Tracking;
let product = models.Product;


app.post('/login',async(req,res)=>{
    let response = await user.findOne({
        where:{name:req.body.name, password:req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        console.log(response);
    }
});

app.get('/read', async (req,res)=>{
    let read=await user.findAll({
        raw:true,
    });
    console.log(read);
});

let port = process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
