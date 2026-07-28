import express from "express"
import dotenv from "dotenv"


const app = express();

app.get("/", (req, res) => {
    res.send("welcome to syaron's world")
})

app.get("/student", (req, res)=> {
    res.json({
        id:7,
        name:"syaron",
        course:"MERN STACK"
    })
})

app.get("/about", (req, res)=>{
    res.send("Welcome to about us page")    
})    

app.get("/employee", (req, res)=> {
    res.json({
        id:4,
        name:"mamyumi",
        role:"developer",
        salary: 70000

    })
})

//data post garnu xa (POST)
app.post("/create", (req,res)=>{
    res.send("CREATED POST")
})

//PUT
app.put("/appointments/:ID",(req,res)=>{
    res.send("appointment updating")
})

//delete
app.delete("/appointments/:ID", (req,res)=>{
    res.send("appointments deletes")
})


app.get("/dcotros/:id",(req,res)=>{   // single get garnu xa vane yo roue url use garxan
    res.send(req.params.id)
})
// multiple parametres (/student/id /rahul)

app.get("/appointments/:id/:name",(req,res)=>{
    res.json(req.params)
})
// query parameters uses in pagination
app.get("/d",(req,res)=>{
    res.json(req.query)
})

const PORT1 = process.env.PORT || 3000;

app.listen(PORT1, ()=>{
    console.log(`Server is running ${PORT1}`)
})
