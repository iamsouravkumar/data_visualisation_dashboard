//to start the backend server run - nodemon server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const MONGOURL = `mongodb+srv://iamsouravkumar:pi1AG6S4fipFwvjs@cluster0.uchgg5z.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0`

const app = express();
//connect to mongoose
mongoose.connect(MONGOURL, {
});
app.use(cors());
app.use(bodyParser.json());

// API endpoint
app.use('/api', dataRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Assignment-App running on port ${port}`);
});