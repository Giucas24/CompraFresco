const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const router = require('./routes/api')



const app = express()

mongoose.connect("mongodb+srv://paciandrea24:paciandrea24@cluster0.kxvlvhz.mongodb.net/Laurea?retryWrites=true&w=majority&appName=Cluster0")


const db = mongoose.connection
db.once("open", () => {
  console.log("Connesso al DB")
  app.listen(3000, () => {
    console.log("App in ascolto alla porta 3000")
  })
})

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'frontend', 'src')));
//app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json())

app.use('/api', router)





//app.use(express.static("../frontend/static"))





