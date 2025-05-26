import mongoose, { Schema, model, models } from "mongoose";

const ownerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressReference: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    registrationDate:{
        type: Date,
        default: Date.now()
    },
    activate: {
        type: Boolean,
        default: true
    }
})

export default models.Owner || mongoose.model("Owner", ownerSchema);