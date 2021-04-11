const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./configs/db');

dotenv.config({path: './.env'});

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dbConnect();

app.use('/', require('./routes/home'));
app.use('/quotes', require('./routes/quotes'));

app.listen(process.env.PORT, (err) => {
    if(err) console.error(err);
    else console.log(`Server running at PORT ${process.env.PORT}`);
})

