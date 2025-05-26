import mongoose, { models, Schema } from "mongoose";

const productCategorySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    observation:{
        type: String
    },
    registrationDate: {
        type: Date, 
        default: Date.now()
    }
})

export default models.ProductCategory || mongoose.model('ProductCategory', productCategorySchema);