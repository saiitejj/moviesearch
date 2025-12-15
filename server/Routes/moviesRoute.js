import express from "express"
import movies from "../Movies.js"
const router=express.Router()



router.get('/free',(req,res)=>{
    const randomIndex=Math.floor(Math.random()*movies.free.length)
    const randomItem=movies.free[randomIndex]
    res.status(201).json(randomItem);  
})

router.get('/paid',(req,res)=>{
    const randomIndex=Math.floor(Math.random()*movies.paid.length)
    const randomItem=movies.paid[randomIndex]
    res.status(201).json(randomItem);  
})

export default router