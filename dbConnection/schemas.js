const mongoose = require('mongoose');

const products = new mongoose.Schema({
    product: String,
    brand: String,
    sizes: [String],
    amount: Number,
    timestamp: {type:Date,default:Date.now},

})

const Products = mongoose.model('Products',products);

// async function createProducts(){
//     const products = new Products;

//     const result = await products.save();
//     console.log(result);
// }


// async function getProducts(brand) {
//     const getProduct = await Products
//     .find({brand:brand})
//     console.log(getProduct[0].amount);
//     console.log(getProduct);
// };

// function test(){
//     console.log('iam here');
// }


module.exports = {Products};