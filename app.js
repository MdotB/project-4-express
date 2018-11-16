const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./controllers/transaction');
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use('/', router);

app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), () => {
  console.log('up and running');
});