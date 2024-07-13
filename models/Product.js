const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: Number,
    name : { type: String, required: true } , 
    type : { type: String, required: true } , 
    price : { type: Number, required: true }, 
    rating : Number,
    warranty_years : Number, 
    available : { type: Boolean, required: true } 
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product