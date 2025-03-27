import mongoose from 'mongoose'

const MONGO_DB_URI = process.env.MONGO_DB_URI

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_DB_URI)
        console.log(`Successfully connected to the DB 🟢`)
    }
    catch(err){
        console.error(`MongoDB connection error : ${err}`)
        process.exit(1)
    }
}

export default connectDB