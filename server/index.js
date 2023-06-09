const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connection sucessful")).catch((err) => console.log(err));

app.listen(3001, () => {
    console.log('listening on port 3001');
});