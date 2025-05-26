import React, {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import Container from "../components/Container";

import Perfil from '../assets/perfil_empty.png'

//Import CSS
import styles from '../../styles/Profile.module.css';
import { EyeOff, Eye, Search, SearchCircle, Pencil, Trash } from 'react-ionicons';
import Link from "next/link";

//Datos de formulario
const initForm = {
    description: '',
    observation: ''
}

const Stock = () => {
    const [form, setForm] = useState(initForm);

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
      }
    
    const handleBlur = (e) => {
        handleChange(e);
    }

    /**
     * Manejador para enviar metodo POST a RESTApi
     */
    async function stockRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                axios.post('/api/product/stock', {
                    description: form.description,
                    observation: form.observation
                })
                .then(function (response) {
                    alert(response.data.message)
                    setForm(initForm)
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
            }else{
                setForm(initForm)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>STOCK DE PRODUCTO</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Lote:</label>
                                                <input 
                                                    placeholder="Ingresar lote" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Tipo de paquete:</label>
                                                <select name="select" className="input_ w-100">
                                                    <option value="value1">Value 1</option>
                                                    <option value="value2" selected>Value 2</option>
                                                    <option value="value3">Value 3</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Tipo de concentración:</label>
                                                <select name="select" className="input_ w-100">
                                                    <option value="value1">Value 1</option>
                                                    <option value="value2" selected>Value 2</option>
                                                    <option value="value3">Value 3</option>
                                                </select>                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Stock:</label>
                                                <input 
                                                    placeholder="Ingresar lote" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Fecha de expiración:</label>
                                                <input
                                                    type="date" 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Precio de compra:</label>
                                                <input 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Porcentaje de interés:</label>
                                                <input

                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Precio de venta:</label>
                                                <input
                                                    disabled 
                                                    placeholder="30" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: 10}}>
                                        <div className="col-md-6">
                                            <div>
                                                <button className="btn_ btn_secondary_ w-100" onClick={stockRegistration}>Registrar lote</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <Link href='/product/categories'>
                                                    <button className="btn_ btn_danger_ w-100">Ver productos</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider_"></div>
                                    <div className="row" style={{marginTop:20}}>
                                        <div className="col-sm-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">N°</th>
                                                            <th scope="col">DESCRIPCIÓN</th>
                                                            <th scope="col">OBSERVACIÓN</th>
                                                            <th scope="col">FECHA DE REGISTRO</th>
                                                            <th scope="col">ACCIÓN</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {   
                                                            /*Array.isArray(categories) &&
                                                            categories.map((c, index) => (
                                                                <tr>
                                                                    <th className="text-center" scope="row">{index+1}</th>
                                                                    <td>{c.description}</td>
                                                                    <td>{c.observation}</td>
                                                                    <td className="text-center">{new Date(c.registrationDate).toLocaleDateString('es-ES')}</td>
                                                                    <td className="text-center">
                                                                        <span className="badge_ btn_primary_" style={{marginLeft: 5}}>
                                                                            <Eye
                                                                                height="15px"
                                                                                width="15px" 
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
                                                                        <span className="badge_ btn_success_" style={{marginLeft: 5}}>
                                                                            <Pencil
                                                                                height="15px"
                                                                                width="15px" 
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
                                                                        <span className="badge_ btn_danger_" style={{marginLeft: 5}} onClick={()=>deleteCategory(c.description, c._id)}>
                                                                            <Trash 
                                                                                height="15px"
                                                                                width="15px"
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))*/
                                                            
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Stock;