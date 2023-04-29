const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors');
const connectDB = require('./configs/connectDB');

dotenv.config();

connectDB()
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', require('./routes/userRoute'))

app.get('/', (req, res) => {
  res.status(200).send(
    '<h1>Welcome to Doctor App</h1>'
  )
})

const PORT = process.env.PORT || 6060
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.bgBlue);
})