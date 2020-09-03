const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{type: String,required:true},
    address:{type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model("user", userSchema);