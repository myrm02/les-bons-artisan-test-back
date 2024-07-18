const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: Number,
    name : String, 
    type : String, 
    price : Number, 
    rating : Number,
    warranty_years : Number, 
    available : Boolean
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product
