const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected to cluster ${connect.connection.host}`.bgCyan);
  }
  catch (error) {
    console.log(`Error connecting to the database`.bgRed);
  }
}

module.exports = connectDB;