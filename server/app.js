const express = require('express')
const app = express()
const cors = require('cors')
const authroutes = require('./routes/auth.routes')
const connectDB = require('./config/db')
const contact = require('./routes/contact.routes')
require("dotenv").config();
const PORT = process.env.PORT 
connectDB()
app.use(cors())
app.use(express.json())


app.use('api/auth',authroutes)
app.use('api/contact',contact)
app.listen(PORT,()=>{
  console.log("Server running on http://localhost:5000 ",PORT);
})