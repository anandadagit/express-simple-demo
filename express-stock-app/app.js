const express = require('express');
const siteRoutes = require('./routes/siteRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/auth', authRoutes);
app.use('/', siteRoutes);
app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});