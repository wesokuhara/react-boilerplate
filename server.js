const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
app.use(logger('tiny'));

// Serve static build assets
app.use(express.static(path.resolve(__dirname, 'build')));

// Always return index.html so react-router renders the page based on the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
