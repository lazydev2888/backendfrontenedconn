import express from "express"
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js"
const app = express()
import cors from 'cors'
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";



// Database Connection

connectDB(DATABASE_URL);


// Use CORS

app.use(cors())
// JSON 
app.use(express.json())

// Load Routes

app.use("/api",web)

app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})