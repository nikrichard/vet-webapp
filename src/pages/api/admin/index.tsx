import { NextApiRequest, NextApiResponse, } from "next";
import { connectDB } from '@/libs/dbConnect';
import User from '../../../models/user';
const reader = require('xlsx');

//Método para ingresar nuevo trabajador

//Método para editar nuevo trabajador
export default async (req: NextApiRequest,res: NextApiResponse) => {
    const from  = Number(req.query.from || 0);
    const limit = 10;
    try {
        if(req.method == 'GET'){
            connectDB();
            const offices = await User.find(
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
            const totalOffices = await User.countDocuments();
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
        }else if(req.method == 'POST'){
            const file = reader.readFile('')
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