import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    per_pat:{
        type: String
    },
    per_mat: {
        type: String
    },
    per_nom: {
        type: String
    },
    fec_nac: {
        type: Date
    },
    per_sex: {
        type: String
    },
    per_doc: {
        type: String
    },
    uni_nom: {
        type: String
    },
    car_nom: {
        type: String
    }
})

export default models.User || model("User", userSchema);