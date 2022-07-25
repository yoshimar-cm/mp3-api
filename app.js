require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/database');

const app = express();

// port
const PORT = process.env.PORT || 3000;

// Config
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

// Todo: Invoque routes API
app.use("/api/v1", require('./routes/api'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

// databse connect
dbConnect();