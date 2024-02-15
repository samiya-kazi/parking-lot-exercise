const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();

const PORT = 3000;

const corsConfig = {
  origin: '*'
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

(async function bootstrap () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/parking-lot');
    console.log('[mongoose]: Connected to DB.');
    app.listen(PORT, () => console.log('[server]: Server is listening on port', PORT));
  } catch (error) {
    console.log(error);
  }
})();