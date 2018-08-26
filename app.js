const express = require('express');
const mainRoutes = require('./routes');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use(mainRoutes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000.");
})
