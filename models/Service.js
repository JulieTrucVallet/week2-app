import mongoose, { Schema } from 'mongoose'



const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category : {
        type : String,
        required : true
    },
    address : { 
        type : String,
        required : true  
    },
    availability : {
        type : Boolean,
        required : true
    },
    userID : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    image: {
        type: String,
        required: false
      }
})

export default mongoose.model('Service', serviceSchema)