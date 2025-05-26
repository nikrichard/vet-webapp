import { NextApiRequest, NextApiResponse, } from "next";
import { connectDB } from '@/libs/dbConnect';
import User from '../../../models/user';

export default async (req: NextApiRequest,res: NextApiResponse) => {
    const from  = Number(req.query.from || 0);
    const limit = 10;
    try {
        if(req.method == 'GET'){
            connectDB()
            const users = await User.find(
                {},
                {
                    _id: 1,
                    per_ide: 1,
                    per_pat:1,
                    per_mat: 1,
                    per_nom: 1,
                    fec_nac: 1,
                    per_sex: 1,
                    per_doc: 1
                }
            )
            .skip(from)
            .limit(limit)
            .sort({_id: -1})
            const totalUsers = await User.countDocuments();
            if(!users){
                res.status(404).json({
                    success: false, 
                    message: "No existen registros"
                })
            }else{
                res.status(200).json({
                    success: true,
                    total: totalUsers,
                    offices: users
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