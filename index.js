import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectDB from './database/client.js'
import authRouter from './routes/auth.js'
import eventRouter from './routes/events.js'
import servicesRouter from './routes/services.js'
import userRouter from './routes/users.js'
const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', authRouter, eventRouter, servicesRouter, userRouter)



app.get('/', verifyUser, (req, res) => {
    res.send(`Welcome to my event API`)
})


connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})