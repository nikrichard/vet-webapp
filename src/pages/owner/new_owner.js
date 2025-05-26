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
//Datos de formulario
const initForm = {
    name: '',
    address: '',
    addressReference: '',
    cellphone: '',
    dni: ''
}

const NewOwner = () => {
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
    async function ownerRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                axios.post('/api/owner/owner', {
                    name: form.name,
                    address: form.address,
                    addressReference: form.addressReference,
                    cellphone: form.cellphone,
                    dni: form.dni
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
                            <h6 style={{marginTop: 15, fontWeight: 600}}>AGREGAR PROPIETARIO</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Nombre del propietario:</label>
                                                <input 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="name"
                                                    value={form.name}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">DNI:</label>
                                                <input 
                                                    placeholder="Ingresar DNI" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="dni"
                                                    value={form.dni}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Número de celular:</label>
                                                <input 
                                                    placeholder="Ingresar número" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="cellphone"
                                                    value={form.cellphone}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Dirección:</label>
                                                <input 
                                                    placeholder="Ingresar dirección" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="address"
                                                    value={form.address}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Referencia:</label>
                                                <textarea
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="addressReference"
                                                    value={form.addressReference}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: 10}}>
                                        <div className="col-md-6">
                                            <div>
                                                <button className="btn_ btn_secondary_ w-100" onClick={ownerRegistration}>Registrar propietarios</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <Link href='/owner/owners/'>
                                                    <button className="btn_ btn_danger_ w-100">Ver propietarios</button>
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

export default NewOwner;