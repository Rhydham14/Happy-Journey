const mongoose = require('mongoose');
const uri = 'mongodb+srv://rhydhambhalodia:TySWinA5qahg5aED@cluster0.dnzgck0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

//Data cant connect 
// TySWinA5qahg5aED
// mongodb+srv://rhydhambhalodia:TySWinA5qahg5aED@cluster0.dnzgck0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
