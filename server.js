// server.js
const express = require('express');
const connectDB = require('./dburl/db');
const { indexRouter } = require('./routes/index');
const dotenv = require('dotenv');
const cors = require('cors'); 
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', indexRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
