import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '../../libs/dbConnect';
import Pet from '../../models/pet';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        await connectDB()
        switch (req.method) {
            case 'GET' :
                //Mostrar Categoria
                return res.status(200).json({ message: 'Si funciona la API'});
            break;
            case 'POST':
                //Crear mascota
                const ownerId = req.body.ownerId;
                const name = req.body.name;
                const sex = req.body.sex;
                const color = req.body.color;
                const specie = req.body.specie;
                const weight = req.body.weight;
                const sterilized = req.body.sterilized;
                const race = req.body.race;
                const birthday = req.body.birthday;
                const age = req.body.age;
                const temper = req.body.temper;
                
                //Buscamos si existe o no una categoria con el _id: categoryId
                const petSearch = await Pet.findOne({ownerId: ownerId, name: name}).exec();
                if(!petSearch){
                    const owner = new Pet({
                        ownerId: ownerId,
                        name: name,
                        sex: sex,
                        color: color,
                        specie: specie,
                        weight: weight,
                        sterilized: sterilized,
                        race: race,
                        birthday: birthday,
                        age: age,
                        temper: temper
                    })
                    await owner.save();
                    res.status(200).json({
                        success: true, 
                        message: "Información registrada con éxito"
                    })
                }else{
                    res.status(401).json({ dniExist: true, message: "La mascota ya se encuentra registrada con el propietario" });
                }
            break;
            case 'PUT':
                //Actualizar producto
                //return res.status(200).json({ message: 'Producto actualizado' });
            break;
            case 'DELETE':
                //Eliminar categoria
                const categoryId = req.body.id;
                const categoryProdDelete = await Pet.findOne({_id: categoryId});
                if(!categoryProdDelete){
                    res.status(404).json({success: false, message: "Información no encontrada"})
                }else{
                    await Pet.findOneAndDelete({_id: categoryId});
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