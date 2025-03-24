import 'dotenv/config'
import express from 'express'
import connectDB from './database/client.js'
import authRouter from './routes/auth.js'

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', authRouter)

app.get('/', (req, res) => {
    res.send(`Welcome to my event API`)
})

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})