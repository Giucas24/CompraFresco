const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const router = require('./routes/api')



const app = express()

app.use(cors(
  {
    origin: ["https://comprafresco.onrender.com/"],
    methods: ["POST", "GET"],
    credentials: true
  }
))

app.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));
//app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json())

mongoose.connect("mongodb+srv://paciandrea24:paciandrea24@cluster0.kxvlvhz.mongodb.net/Laurea?retryWrites=true&w=majority&appName=Cluster0")


const db = mongoose.connection
db.once("open", () => {
  console.log("Connesso al DB")
  app.listen(3000, () => {
    console.log("App in ascolto alla porta 3000")
  })
})



app.use('/api', router)

app.get("/", (req,res) => {
  res.json("Hello")
})



//app.use(express.static("../frontend/static"))





