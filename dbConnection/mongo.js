const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/MyStore',{
        useNewUrlParser:true
    })
        .then(()=>{
            console.log('connected to MongoDB');
        }).catch(err=>console.error('no connection',err));

module.exports = {mongoose};




