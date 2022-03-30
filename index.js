const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();

require('./api/db');

//Middlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

//settings
app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public'));

//inizialitations
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});

//routes
app.use(require('./api'));