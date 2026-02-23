const express = require('express');
const siteRouter = express.Router();

siteRouter.get('/', (req, res) => {
  res.render('index');
});

siteRouter.get('/aboutus', (req, res) => {
  res.send('About us edited after node app!');
});

siteRouter.get('/contact', (req, res) => {
  res.render('contactus');
});

module.exports = siteRouter;