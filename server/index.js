
const express=require('express')
const mongoose=require('mongoose')

const app=express()
require('dotenv').config()

const PORT=process.env.PORT || 1000
const DB=process.env.DB


// const PORT=1000
// const DB='mongodb://localhost/myproff'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('db is connected'))
.catch((err)=>console.error('db error is happend:', err))



app.get('/',(req,res)=>{
    res.send('get me first')
})

app.delete('/delete',(req,res)=>{
    res.json({ msg:'i deleted successefully'})
})


app.listen(PORT,()=>console.log('backend is connected '))


// app.on('error', (err) => {
//     console.error('Server listen error:', err);
//   });   