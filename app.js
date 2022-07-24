require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/database');

const app = express();

// port
const PORT = process.env.PORT || 3000;


// Config
app.use(cors());


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

// databse connect
dbConnect();