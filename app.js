const express = require('express')
const app = express();
const {connectDB} = require('./config/db');
const router = require('./routes/index')
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
connectDB();
app.use('/api' ,router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
