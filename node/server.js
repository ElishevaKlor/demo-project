const {tr}=require('./translate')
const express=require('express')
const fs=require('fs')
const app=express()
const PORT=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send("hey")
})
app.get('/route/:word',(req,res)=>{
    const {word}=req.params
    console.log(typeof(word))
    const arrLetters=word.split('')
    console.log(arrLetters)
    let sum=0;
    const newarrLetters =arrLetters.map(a=>{
        const result=tr.find(t=>{return t.word===a})
        return result.number
    })
    console.log(newarrLetters)
    newarrLetters.forEach(num=>sum=sum+Number(num))
    res.send(`${sum}`)
fs.appendFile('./words.json',JSON.parse(word),(err)=>{
    if(err) throw err
})

})
app.listen(PORT,()=>{console.log("The server in running")})