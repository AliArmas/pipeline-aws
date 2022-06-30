//requerimientos
const express = require('express');
const app  = express();
const morgan = require('morgan');
require('dotenv').config();

//settings
app.set('port',process.env.PORT || 8080);
app.set('host', process.env.HOST || 'localhost');

app.set('json spaces', 2);

//api URL
app.set('url', '/api/v1/');

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// app.use(`${app.get('url')}user`,require('./routes/users/user'));
app.use(`${app.get('url')}users`,require("../routes/users/user"));
//ERROR 404
// app.use((req,res, next) => {
//     res.status(404).sendFile(__dirname+"/views/pages/404.html");
//     next();
// });
//iniciar el servidor
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('host') + ':' + app.get('port'));
  });

