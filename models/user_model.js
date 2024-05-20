import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: ''
    },
},
{ timestamps: true
 })

module.export = mongoose.model('User', userSchema)