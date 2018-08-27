const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use(mainRoutes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000.");
})
