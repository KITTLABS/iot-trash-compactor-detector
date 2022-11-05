const express = require('express'); // call express
const app = express(); // define our app using express
const cors = require('cors');
app.use(express.json({ limit: '1gb' }));

// CORSallowCors
app.use(cors());

// General APIs
app.use('/device', require('./routes/device'));
app.use('/mqtt', require('./routes/mqtt'));

module.exports = app;
