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

const newCategorie = () => {
    const [form, setForm] = useState(initForm);

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: name === 'productCategoryId' ? value : value.toUpperCase() // Convertir a mayúsculas aquí
        })
      }
    
    const handleBlur = (e) => {
        handleChange(e);
    }

    /**
     * Manejador para enviar metodo POST a RESTApi
     */
    // Consultamos datos de reniec con servicios pide
    async function categoryRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                axios.post('/api/product/categorie', {
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
                            <h6 style={{marginTop: 15, fontWeight: 600}}>REGISTRAR CATEGORIA DE PRODUCTO</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Descripción:</label>
                                                <input 
                                                    placeholder="Ingresar descripción" 
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
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Observación:</label>
                                                <textarea 
                                                    placeholder="Ingresar descripción" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="observation"
                                                    value={form.observation}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <button className="btn_ btn_secondary_ w-100" onClick={categoryRegistration}>Registrar categoría</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <Link href='/product/categories'>
                                                    <button className="btn_ btn_danger_ w-100">Mostrar categorías</button>
                                                </Link>
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

export default newCategorie;