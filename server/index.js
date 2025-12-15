import express from "express"
// import cors from "cors"
import moviesRoutes from "./Routes/moviesRoute.js";

const app=express()
const port=3000;

// app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("I am listening")
})

app.use('/movies/',moviesRoutes)


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
