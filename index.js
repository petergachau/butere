import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())


const PORT=5000;


app.get((req,res)=>{
    res.send('hello Butere  boys')
})


app.listen(PORT, ()=>{
    console.log(`listenin at port ${PORT}`);
})
