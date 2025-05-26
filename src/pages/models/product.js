import mongoose, { models, Schema } from "mongoose";

const productSchema = new Schema({
    productCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'ProductCategory'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['BIEN','SERVICIO']
    },
    registrationDate: {
        type: Date, 
        default: Date.now()
    }
})

export default models.Product || mongoose.model('Product', productSchema);