import { config } from "dotenv";
import express from "express";
import UserRouter from "./routers/users.js"
config()

const app = express()
app.use(express.json())
app.use(UserRouter)

app.listen(process.env.PORT, () => console.log("Server is running..."))