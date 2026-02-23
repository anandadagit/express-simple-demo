const express = require('express');
const siteRouter = express.Router();

siteRouter.get('/', (req, res) => {
  res.render('index', {title:'Home page'});
});

siteRouter.get('/aboutus', (req, res) => {
  res.send('About us edited after node app!');
});

siteRouter.get('/contact', (req, res) => {
  res.render('contactus', {title:'Contact us'});
});

module.exports = siteRouter;