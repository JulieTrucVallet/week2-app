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
app.use('/images', express.static('public/images'))

app.use('/api', authRouter, eventRouter, servicesRouter, userRouter)

app.get('/', (req, res) => {
    res.send(`Welcome to my event API`)
})

app.get('public/images/:filename', (req, res) => {
    const file = `public/images/${req.params.filename}`
    res.sendFile(path.resolve(file))
})

app.get('/images', (req, res) => {
    fs.readdir('public/images', (err, files) => {
        if (err) {
            return res.status(500).send({ error: err })
        }
        res.send({ images : files })
    })
})

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})