const express = require('express');
const router = express.Router();
const {Products} = require('../dbConnection/schemas');



    router.get('/', (req, res) => {
        Products.find()
        .then((prod)=>{
            // res.send({prod})
            res.render('index',{prod});
            // console.log(prod);
        })
        .catch((e)=>{
            res.status(400).send('cant query database',e);
        })
        
    });
    module.exports = router;





