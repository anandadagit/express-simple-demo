const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My first express application</title>
    </head>
    <body>
      <h1>Hello World from my first application in express!</h1>
    </body>
    </html>
  `);
});

authRouter.get('/login', (req, res) => {
      res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>login page</title>
    </head>
    <body>
      <h1>Login page !</h1>
    </body>
    </html>
  `);
})

authRouter.get('/register', (req, res) => {
    res.send("This is the register page");
})

module.exports = authRouter;