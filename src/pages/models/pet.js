import mongoose, { models, Schema } from "mongoose";

const petSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Owner'
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['HEMBRA', 'MACHO']
    },
    color:{
        type: String,
        required: true,
    },
    specie: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sterilized: {
        type: Boolean,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    temper: {
        type: String,
        required: true
    },
    activate:{
        type: Boolean,
        default: true
    },
    registrationDate: {
        type: Date, 
        default: Date.now()
    }
})

export default models.Pet || mongoose.model('Pet', petSchema);