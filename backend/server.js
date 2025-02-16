import express from "express"
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandlier } from "./middleware/errorMiddleware.js"
import connectDB from './config/db.js'

// to use tokens from the env file
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT || 5000

// connect mongo db
connectDB()

const app = express();
// anything connected to api users will be coming from the userRoutes()
app.use('/api/users', userRoutes)


app.get('/', (res, req)=> res.send("server is ready"));
// midlewares
app.use(notFound);
app.use(errorHandlier);

app.listen(port, ()=> {
    console.log(`my server started at port ${port}`)
});




















