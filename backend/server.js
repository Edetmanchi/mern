import express from "express"

import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5000

const app = express();
app.get('/', (res, req)=> res.send("server is ready"))

app.listen(port, ()=> {
    console.log(`my server started at port ${port}`)
})