const express = require('express');
const helmet = require('helmet');
const hbs = require('express-handlebars');
const {mongoose} = require('./dbConnection/mongo');
const routes = require('./routes/handlers');


const {Products} = require('./dbConnection/schemas');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(helmet());



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'main'}));
app.set('view engine','hbs');

app.use('/',routes);

app.listen(PORT,()=>{
    console.log('server is up');
});

// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f



