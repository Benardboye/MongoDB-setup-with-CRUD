import express,{Request, Response} from "express"
import TodoRoute from "./routes/todoRoute"
import dotenv from "dotenv"
import logger from "morgan"
import connectDB from "./config/db-connect"


dotenv.config()
const app = express()
const port = process.env.PORT || 5000



app.use(express.json())
app.use(logger("dev"))
connectDB()

app.use("/todo", TodoRoute)

app.listen(port, () => {
    console.log(`Listen on port: ${port}`)
})

export default app