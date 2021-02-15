const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequalize = require('./util/database');

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

const indexRoute = require('./routes/index');
const adminRoute = require('./routes/admin');

app.use('/', indexRoute);
app.use('/admin', adminRoute);

sequalize
   .sync()
   .then((result) => {
      app.listen(3000);
   })
   .catch((err) => console.log(err));
