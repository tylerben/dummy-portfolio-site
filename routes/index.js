// Declare dependencies
const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

// Home route
// Pass projects data as locals
router.get('/', (req, res) => {
  res.render('index', { projects });
});

// About route
router.get('/about', (req, res) => {
  res.render('about');
});

// Project route
// if user tries to access route without id specified, redirect to home page
router.get('/project', (req, res) => {
  res.redirect('/');
})

// Project route
// Pass requested project as data to locals
// If user requests a project that does not exist, return a 404 error to be handled by error handler in app.js
router.get('/project/:id', (req, res, next) => {
  const { id } = req.params;
  const project = projects[id];
  if ( project ) {
    res.render('project', { project });
  } else {
    let err = new Error('Project Not Found. Please check the url in your browser\'s address bar.');
    err.status = 404;
    next(err);
  }
})

// Export routes
module.exports = router;
