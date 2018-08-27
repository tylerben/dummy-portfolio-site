// Declare project dependencies
const express = require('express');
const path = require('path');
const mainRoutes = require('./routes');

// Create an express app
// Set the view engine
// Create a static server to serve assets
const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

// Conigure application routes
app.use(mainRoutes);

// Set the app to run on port 3000 and display a message that the app is running on localhost:3000
app.listen(3000, () => {
  console.log("The application is running on localhost:3000.");
})
