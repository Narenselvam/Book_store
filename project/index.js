import express, { response } from 'express';
import mongoose from 'mongoose';
import { PORT, connectionString } from './config.js';
import booksRoute from './Routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    console.log("req")
    return res.status(234).send("Hello World");
   });

app.use(cors());
app.use('/books', booksRoute);
   
mongoose.connect(connectionString).then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   });
   
}).catch((err) => {
  console.log(err);
});

