// src/app.ts
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import { connectedDB } from './config/mongoAuth';
import MenuRoute from './routes/menuRoute';
import { errorHandler, notFound } from './middleware/errorMiddleware';


connectedDB()
const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";

const corsOptions = {
  origin: allowedOrigin,  
  methods: "GET,POST", 
  allowedHeaders: "Content-Type,Authorization",  
  credentials: true,  
};

app.use(cors(corsOptions));  
app.use(cookieParser());
app.use(express.json());


app.use(MenuRoute)
app.use(errorHandler)
app.use(notFound)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
