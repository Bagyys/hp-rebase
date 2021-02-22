const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
require('dotenv').config();
require('./db/connection')();
const morgan = require('morgan');
const mongoose = require('mongoose');

morgan('tiny');
const helmet = require('helmet');

app.use(helmet());

// setup static files and bodyparser
app.use(express.static(__dirname + '/public'));
app.use(express.json());
// extended false leidzia parse'inti non default features
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  morgan('dev', {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

// log all requests to access.log
app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
  console.log(req.query, 'req');
  const data = req.query;

  if (!req.query.t) {
    return res.status(404).send('netu metki');
  }

  res.send(
    `A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0`
  );
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

app.listen(3000);
