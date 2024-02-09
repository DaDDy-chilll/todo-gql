const mongoose = require('mongoose')
const url = process.env.DB
const connectDB  = async () => await mongoose.connect(url);


mongoose.connection.once("open",() => console.log('DB is connected'))
mongoose.connection.on("error",() => console.log(error))

module.exports = connectDB;