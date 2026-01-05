const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    message:{
        type: String,
       required: true,
    },
     image:{
        type: String,
        required: true,
     }
})
module.exports= mongoose.model('usercontact',UserSchema)