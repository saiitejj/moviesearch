import express from "express"
import cors from "cors"
import moviesRoutes from "./Routes/moviesRoute.js";

const app=express()
const port=3000;

const allowedOrigins = [
  "http://localhost:5173",        // Vite local
  "https://moviesearch-kappa-three.vercel.app"   // 👈 your Vercel URL
];

app.use(
  cors({
    origin: allowedOrigins
  })
);
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("I am listening")
})

app.use('/movies/',moviesRoutes)


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
