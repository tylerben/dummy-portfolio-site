// Declare dependencies
const express = require('express');
const path = require('path');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

// Home route
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
router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render('project', { project });
})

// Export routes
module.exports = router;
