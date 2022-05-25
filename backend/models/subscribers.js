// const mongoose=require('mongoose')
// const subscriberSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     channel:{
//         type:String,
//         required:true
//     },
    // created:{
    //     type:Date,
    //     required:true,
    //     default:Date.now
    // }
// })
// module.exports=mongoose.model('Subscriber',subscriberSchema)
const mongoose = require('mongoose')
const subscriberSchema = new mongoose.Schema({
    article:{
        type:String,
        required:true,

    }

    
    ,created:{
        type:Date,
        required:true,
        default:Date.now
    }
})
module.exports= mongoose.model('Subscriber',subscriberSchema)