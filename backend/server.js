require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const therapistsRoutes = require('./routes/therapists')
const userRoutes = require('./routes/users')
const patientRoutes = require('./routes/patients')
const matchingRoutes = require('./routes/matching')

const app = express()


//another middleware
app.use(express.json())

const port = process.env.PORT ||4000



//middlewares
app.use((req, res, next)=>{
  console.log(req.path, req.method)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next()
})

//routes
app.use('/api/therapists',therapistsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/patients', patientRoutes)
app.use('/api/matching',matchingRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(port, ()=>{
    console.log('Connected to DB Successfully & We are up people!!!')
})
}).catch((error)=>{
  console.log(error)
})

// app.get('/', (req, res) => {
//  res.json({mssg: "Welcome to MHA"})
// })

