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

// catch 404 and forward to error handler
app.use((req, res, next) =>  {
  const err = new Error('Not Found');
  err.status = 404;
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.error(`Error: ${fullUrl} does not exist`);
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    status: err.status,
    stack: err.stack
  });
});

// Set the app to run on port 3000 and display a message that the app is running on localhost:3000
app.listen(3000, () => {
  console.log("The application is running on localhost:3000.");
})
