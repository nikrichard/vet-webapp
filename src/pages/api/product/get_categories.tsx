import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '../../libs/dbConnect';
import ProductCategory from '../../models/productCategory';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :
                const categories = await ProductCategory.find(
                    {},
                    {
                        _id: 1,
                        description: 1
                    }
                )
                .sort({description:1}); //-1 para descendente y 1 para ascendente
                return res.status(200).json({success: true, categories: categories});     
            default:
                return res.status(405).json({ message: 'Método no permitido' });
        }
    } catch (error: unknown){
        console.log(error);
        res.status(500).json({messaje: `Ocurrió un error; comunicarse con soporte`})
    }
}