import express from "express"
// import {useRoutes} from "./routes/userRoutes.js"
import userRoutes from './routes/userRoutes.js'

// to use tokens from the env file
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

const app = express();
app.use('/api/users', userRoutes)


app.get('/', (res, req)=> res.send("server is ready"));

app.listen(port, ()=> {
    console.log(`my server started at port ${port}`)
});



















