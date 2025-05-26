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
    productCategoryId: '',
    name: '',
    description: '',
    type: ''
}

const initCategories = {
    success: '',
    categories: []
}

const NewProduct = () => {
    const [form, setForm] = useState(initForm);
    const [categories, setCategories] = useState(initCategories)

    /*const { description, observation, category } = form;

    if (!description || !observation || !category) {
        alert("Todos los campos son obligatorios");
        return;
    }*/

    useEffect(()=>{
        getCategories();
    }, [])

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
    async function productRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                axios.post('/api/product/product', {
                    productCategoryId: form.productCategoryId,
                    name: form.name,
                    description: form.description,
                    type: form.type
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

    //Método para obtener categorias de RESTApi
    async function getCategories(){
        try {
            const res = await fetch(`/api/product/get_categories`);
            const data = await res.json();
            setCategories(data.categories);
        } catch (error) {
            console.error('Error al cargar categorías:', error);  
        }
    }

    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>REGISTRAR PRODUCTO</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Nombre:</label>
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
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Tipo:</label>
                                                <select 
                                                    name="type" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.type}
                                                >
                                                    <option value="">Seleccione un tipo</option>
                                                    <option key="" value="BIEN">BIEN</option>
                                                    <option key="" value="SERVICIO">SERVICIO</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Descripción:</label>
                                                <textarea 
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
                                                <label className="label_">Tipo:</label>
                                                <select 
                                                    name="productCategoryId" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.productCategoryId}
                                                >
                                                    <option value="">Seleccione un tipo</option>
                                                    {   
                                                        Array.isArray(categories) &&
                                                        categories.map((c, index)=>(
                                                            <option key={c._id} value={c._id}>{c.description}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: 10}}>
                                        <div className="col-md-6">
                                            <div>
                                                <button className="btn_ btn_secondary_ w-100" onClick={productRegistration}>Registrar producto</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <Link href='/product/products'>
                                                    <button className="btn_ btn_danger_ w-100">Mostrar productos</button>
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

export default newProduct;