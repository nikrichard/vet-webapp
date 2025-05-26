import mongoose, { Schema, model, models } from "mongoose";

const stockSchema = new Schema({
    productId:{ //Id del producto
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    nameLote: { //Lote
        type: String,
        required: true
    },
    typeOfPackage: { //Tipo de paquete
        type: String,
        required: true
    },
    typeOfConcentration: { //Tipo de concentración
        type: String,
        required: true
    },
    stock: { //Stock
        type: Number,
        required: true
    },
    expirationDate: { //Fecha de expiración
        type: Date,
        required: true
    },
    purchagePrice: { //Precio de compra
        type: Number,
        required: true
    },
    percentage:{ //Porcentaje aplicado
        type: Number,
        required: true
    },
    salePrice: { //Precio de venta
        type: Number,
        required: true
    }
})

export default models.Stock || mongoose.model("Stock", stockSchema);