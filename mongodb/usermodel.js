const mongoose=require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/practice`)

// Schema accept an object
const userShema= mongoose.Schema({
    name:String,
    email:String
})  

module.exports=mongoose.model('User',userShema);
