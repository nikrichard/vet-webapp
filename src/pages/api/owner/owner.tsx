import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '../../libs/dbConnect';
import Owner from '../../models/owner';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :
                //Mostrar Categoria
                return res.status(200).json({ message: 'Si funciona la API'});
            break;
            case 'POST':
                //Crear propietario
                const name = req.body.name;
                const address = req.body.address;
                const addressReference = req.body.addressReference;
                const cellphone = req.body.cellphone;
                const dni = req.body.dni;
                
                //Buscamos si existe o no una categoria con el _id: categoryId
                const ownerSearch = await Owner.findOne({dni: dni}).exec();
                if(!ownerSearch){
                    const owner = new Owner({
                        name: name,
                        address: address,
                        addressReference: addressReference,
                        cellphone: cellphone,
                        dni: dni
                    })
                    await owner.save();
                    res.status(200).json({
                        success: true, 
                        message: "Información registrada con éxito"
                    })
                }else{
                    res.status(401).json({ dniExist: true, message: "La persona ya está fue registrada anteriormente" });
                }
            break;
            case 'PUT':
                //Actualizar producto
                //return res.status(200).json({ message: 'Producto actualizado' });
            break;
            case 'DELETE':
                //Eliminar categoria
                const categoryId = req.body.id;
                const categoryProdDelete = await Owner.findOne({_id: categoryId});
                if(!categoryProdDelete){
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }else{
                    await Owner.findOneAndDelete({_id: categoryId});
                    return res.status(200).json({success: true, message: "Información eliminada correctamente"})
                }
            break;
            default:
                return res.status(405).json({ message: 'Método no permitido' });
        }
    } catch (error: unknown){
        console.log(error);
        res.status(500).json({messaje: `Ocurrió un error; comunicarse con soporte`})
    }
}