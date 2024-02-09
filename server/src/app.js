const express = require('express');
// const api = require('./routes');
const morgan = require('morgan');
const app = express();


app.use(express.json())
// app.use("/api/v1",api)
if(process.env.NODE_ENV !== 'production') app.use(morgan("dev"))
// app.get('*', (req, res) => res.send('wrong route'))

module.exports = app;