import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '../../libs/dbConnect';
import ProductCategory from '../../models/productCategory';
import { CallbackError } from "mongoose";

export default async (req:NextApiRequest, res:NextApiResponse) => {
    console.log(req.method);
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :    
            //Mostrar Categoria
                const desc = req.query.description;
                const result = await ProductCategory.find({description: {$regex: `^${desc}`, $options: 'i' }}).limit(10);
                if(result){
                    console.log(result);    
                    res.status(200).json({success: true, categories: result})
                }else{
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }

            case 'POST':
                //Crear Categoria
                const description = req.body.description;
                const observation = req.body.observation;
                
                //Buscamos si existe o no una categoria con el _id: categoryId
                const categorySearch = await ProductCategory.findOne({description: description}).exec();
                if(!categorySearch){
                    const productCategory = new ProductCategory({
                        description: description,
                        observation: observation
                    })
                    await productCategory.save();
                    res.status(200).json({
                        success: true, 
                        message: "Información registrada con éxito"
                    });
                }else{
                    res.status(401).json({ emailexist: true, message: "La categoria ya está en uso" });
                }
            
            case 'PUT':
                //Actualizar producto
                //return res.status(200).json({ message: 'Producto actualizado' });
            
            case 'DELETE':
                //Eliminar categoria
                const categoryId = req.body.id;
                const categoryProdDelete = await ProductCategory.findOne({_id: categoryId});
                if(!categoryProdDelete){
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }else{
                    await ProductCategory.findOneAndDelete({_id: categoryId});
                    return res.status(200).json({success: true, message: "Información eliminada correctamente"})
                }
            
            default:
                return res.status(405).json({ message: 'Método no permitido' });
        }
    } catch (error: unknown){
        console.log(error);
        res.status(500).json({messaje: `Ocurrió un error; comunicarse con soporte`})
    }
}