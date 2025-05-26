import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '@/libs/dbConnect';
import Product from '../../../models/product';
import Stock from '../../../models/stock';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    console.log(req.method);
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :    
                //Mostrar Categoria
                /*const desc = req.query.description;
                const result = await Stock.find({description: {$regex: `^${desc}`, $options: 'i' }}).limit(10);
                if(result){
                    console.log(result);    
                    res.status(200).json({success: true, categories: result})
                }else{
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }*/
                break;
            case 'POST':
                //Crear Stock
                const productId = req.body.productId
                const nameLote = req.body.nameLote
                const typeOfPackage = req.body.typeOfPackage
                const typeOfConcentration = req.body.typeOfConcentration
                const stock = req.body.stock
                const expirationDate = req.body.expirationDate
                const purchagePrice = req.body.purchagePrice
                const percentage = req.body.percentage
                const salePrice = req.body.salePrice
                
                //Buscamos si existe o no una categoria con el _id: categoryId
                const newStock = new Stock({
                    productId: productId,
                    nameLote: nameLote,
                    typeOfPackage: typeOfPackage,
                    typeOfConcentration: typeOfConcentration,
                    stock: stock,
                    expirationDate: expirationDate,
                    purchagePrice: purchagePrice,
                    percentage: percentage,
                    salePrice: salePrice
                })
                await newStock.save();
                res.status(200).json({
                    success: true, 
                    message: "Información registrada con éxito"
                });
                
                break;

            case 'PUT':
                //Actualizar producto
                //return res.status(200).json({ message: 'Producto actualizado' });

                break;
            
            case 'DELETE':
                //Eliminar categoria
                const categoryId = req.body.id;
                const categoryProdDelete = await Stock.findOne({_id: categoryId});
                if(!categoryProdDelete){
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }else{
                    await Stock.findOneAndDelete({_id: categoryId});
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