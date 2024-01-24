
const express = require("express")
require("dotenv").config()

const cors = require("cors")
const { connection } = require("./db")
const { movieRouter } = require("./routes/movie.routes")
const { userRouter } = require("./routes/user.routes")


const app = express()
app.use(express.json())
app.use(cors())
 

app.use("/movie", movieRouter)
app.use("/user", userRouter)



app.listen(process.env.port, async() => {
    try {

      await connection
      console.log("connected to db")
      console.log(`port is running at ${process.env.port}`)
      
    } catch (error) {
       console.log(error)
    }
})