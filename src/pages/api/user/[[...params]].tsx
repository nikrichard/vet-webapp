import { NextApiRequest, NextApiResponse, } from "next";
import { connectDB } from '../../libs/dbConnect';
import User from '../../models/user';
import dayjs from 'dayjs';
import moment from "moment";

//Método para eliminar usuario
function calcularEdad(fecha: any){
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

//Método para actualizar usuario
export default async (req: NextApiRequest,res: NextApiResponse) => {
    const num_document = req.query.num_document;
    try {
        if(req.method == 'GET'){ //Método para ver usuario
            connectDB();
            const user_search = await User.findOne({per_doc: num_document})
            if(!user_search){
                res.status(404).json({
                    success: false, 
                    message: "Información no encontrada"
                })
            }else{
                
                const fecha_nacimiento = moment(`${user_search.fec_nac}`)//.format('YYYY-MM-DD')
                const fecha_actual = moment()//.format('YYYY-MM-DD')

                let fecha1 = moment(fecha_nacimiento);
                let fecha2 = moment(fecha_actual);
                
                let dias = fecha_actual.diff(fecha_nacimiento, "days")
                
                console.log(fecha1);
                console.log(dias);

                res.status(200).json({
                    success: true,
                    user: {
                        _id: user_search._id,
                        per_pat: user_search.per_pat,
                        per_mat: user_search.per_mat,
                        per_nom: user_search.per_nom,
                        fec_nac: fecha_nacimiento,
                        cant_anios: 12,
                        per_sex: user_search.per_sex,
                        per_doc: user_search.per_doc,
                        uni_nom: user_search.uni_nom,
                        car_nom: user_search.car_nom,
                    }
                })
            }
        }else if(req.method == 'POST'){ //Método para registrar usuario
            const per_pat = req.body.per_pat;
            const per_mat = req.body.per_mat; 
            const per_nom = req.body.per_nom; 
            const fec_nac = req.body.fec_nac;
            const per_sex = req.body.per_sex; 
            const per_doc = req.body.per_doc;
            const uni_nom = req.body.uni_nom;
            const car_nom = req.body.car_nom;

            const userSearch = await User.findOne({per_doc: per_doc})
            if(userSearch){
                res.status(404).json({
                    success: false,
                    message: `El personal ya está registrado`
                })
            }else{
                const user = new User({
                    per_pat: per_pat,
                    per_mat: per_mat,
                    per_nom: per_nom,
                    fec_nac: new Date(fec_nac),
                    per_sex: per_sex,
                    per_doc: per_doc,
                    uni_nom: uni_nom,
                    car_nom: car_nom,
                })
                user.save();
                res.status(200).json({
                    success: true,
                    message: `Se realizó el registro correctamente`
                })
            }
        }
    } catch (error: unknown) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: `Error al realizar petición; Comunicarse con área de soporte`
        })
    }         
}

/**
 * import { Request, Response } from "express";

//Import Models
import Office from "../models/OfficeModel";

//Create office function
const createOffice = async(req: Request, res: Response) => {
    const name = req.body.name;
    const description = req.body.description;
    try {
        const office = new Office({
            name: name,
            description: description
        })
        await office.save()
        res.status(200).json({
            success: true,
            message: 'Registro realizado con éxito'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

//Read offices function
const getAllOffices = async (req: Request,res: Response) => {
    const from  = Number(req.query.from || 0);
    const limit = 10;
    try {
        const offices = await Office.find(
            {},
            {
                name: 1,
                description: 1,
                registrationDate: 1,
                active: 1
            }
        )
        .skip(from)
        .limit(limit)
        .sort({_id: -1})
        const totalOffices = await Office.countDocuments();
        if(!offices){
            res.status(404).json({
                success: false, 
                message: "No existen registros"
            })
        }else{
            res.status(200).json({
                success:true,
                total: totalOffices,
                offices: offices
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

//Read office id function
const getOffice = async(req:Request,res:Response) => {
    const officeId = req.params.officeId;
    try {
        console.log(officeId)
        const office = await Office.find({_id: officeId}).exec();
        if(!office){
            res.status(404).json({success: false, message: "Información no encontrada"})
        }else{
            res.status(200).json({success: true, office: office})
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

//Update office function
const updateOffice = async(req:Request, res:Response) => {
    const officeId = req.params.officeId;
    const name = req.body.name;
    const description = req.body.description;
    const active = req.body.active;

    const updateData = {
        name: name,
        description: description,
        active: active
    }
    
    try {
        const office = await Office.findOne({_id: officeId});
        if(!office){
            res.status(404).json({success: false, message: "Información no encontrada"})
        }else{
            await Office.findByIdAndUpdate({_id: officeId}, updateData, {new: true});
            return res.status(200).json({
                success: true, 
                message: "Información actualizada con éxito"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

//Delete office function
const deleteOffice = async(req:Request, res:Response) => {
    const officeId = req.params.officeId;
    try {
        const officeSearch = await Office.findOne({_id: officeId});
        if(!officeSearch){
            res.status(404).json({success: false, message: "Información no encontrada"})
        }else{
            await Office.findOneAndDelete({_id: officeId});
            return res.status(200).json({
                success: true, 
                message: "Tarea eliminada con èxito"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

//Delete office
const searchOffice = async(req:Request, res:Response)=>{
    const name = req.body.name
    try {
        const offices = await Office.find({ "name" : { $regex: `${name}`, $options: 'i' } });
        if(!offices){
            res.status(404).json({success: false, message: "Información no encontrada"})
        }else{
            res.status(200).json({
                success:true,
                totalResult: offices.length,
                offices: offices
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al realizar alguna petición, por favor comunicarse con soporte`
        })
        console.log(`Error en server: ${error}`)
    }
}

export default {
    createOffice,
    getAllOffices,
    getOffice,
    updateOffice,
    deleteOffice,
    searchOffice
}
 */