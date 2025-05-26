import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '@/libs/dbConnect';
import Product from '../../../models/product';
import Stock from '../../../models/stock';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :
                //Mostrar Categorias
                let expectedQuery = req.query
                let numberNameFrom = "from" //nombre de la query que debemos de recibir
                let from = Number(expectedQuery.from); //variable para responder la busqueda desde un número determinado

                if(Object.entries(expectedQuery).length === 0){ //Verificamos si se envía o no una query
                    res.status(409).json({success: false, message: "Error al realizar la petición"});
                }else{
                    if(!expectedQuery.hasOwnProperty(numberNameFrom)){ //Verificamos si en la query existe la key "from"
                        res.status(409).json({success: false, message: "Error al realizar la petició"});
                    }else{
                        const id = req.query.id
                        const stocks = await Stock.find(
                            { productId: id },
                            {
                                _id: 1,
                                productId: 1,
                                nameLote: 1,
                                typeOfPackage: 1,
                                typeOfConcentration: 1,
                                stock: 1,
                                expirationDate: 1,
                                purchagePrice: 1,
                                percentage: 1,
                                salePrice: 1
                            }
                        )
                        .skip(from)
                        .limit(10)
                        .sort({_id: -1}) //-1 para descendente y 1 para ascendente
                        //.populate('productId', 'name'); 
                        const countStocks = await Stock.countDocuments() //Devolvemos la cantidad de documentos en la colección
                        return res.status(200).json({success: true, stocks: stocks, total: countStocks})//, total: countBranchs});     
                    }
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