import mongoose, { Schema } from "mongoose";

const serviceSchema = Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    avalibility : {
        type : Boolean,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

export default mongoose.model('Service', serviceSchema)