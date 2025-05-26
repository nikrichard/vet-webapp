import React, { useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import dayjs from "dayjs";

//Import Icons
import { EyeOff, Eye, Search, SearchCircle, PencilOutline, TrashOutline } from 'react-ionicons';

type dataServer = {
    success?: boolean,
    user? : 
        {
            _id?: Object,
            per_pat?: string,
            per_mat?: string,
            per_nom?: string,
            fec_nac?: string,
            per_sex?: string,
            per_doc?: string,
            uni_nom?: string,
            car_nom?: string,
        }
}

//Datos de formulario
const initForm = {
    id_user: '',
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    fecha_nacimiento: '',
    sexo: '',
    num_document: '',
    unidad_nombre: '',
    cargo_nombre: '',
}

const userFound: dataServer = {}

const initialInput = {
    numDoc: ''
}

const Nuevo = () => {
    const [data, setData] = useState(userFound);
    const [numDoc, setNumDoc ] = useState(initialInput);

    const [form, setForm] = useState(initForm);
    
    

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    /*const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
      }
    
    const handleBlur = (e) => {
        handleChange(e);
    }
    
    //Método para almacenar valor de Dolar en Localstogare - INICIO MODAL
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log(initForm);
            /*localStorage.setItem("priceDolar", parseFloat(form.price))
            setPriceUSD(localStorage.getItem('priceDolar'));
            handleClose();
        } catch (error) {
            console.log(error)
        }
    }*/

    /**
     * Manejadores del formulario de Busqueda de personal por Número de Documento
     */
    const handleChangeSearch = (e: any) => {
        const {name, value} = e.target
        setNumDoc({
            ...numDoc,
            [name]: value
        })
      }
    
    const handleBlurSearch = (e: any) => {
        handleChangeSearch(e);
    }

    // Consultamos datos de reniec con servicios pide
    async function getUser() {
        let num_document = numDoc.numDoc
        try {
            await axios.get(`/api/user/`, {
                params:{
                    num_document
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response)=>{
                setData(response.data)
                console.log(data)
            }).catch((error)=>{
                alert(`${error.response.data.message}`)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 10}}>Mantenimiento de Personal</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div>
                                                <label className="label_">Buscar:</label>
                                                <div className="content_search_">
                                                    <input 
                                                        className="input_ w-100"
                                                        placeholder="Ingresar documento" 
                                                        onBlur={handleBlurSearch}
                                                        onChange={handleChangeSearch}
                                                        name="numDoc"
                                                        value={numDoc.numDoc}    
                                                    />
                                                    <button onClick={getUser}>
                                                        <Search 
                                                            color={"#fff"}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:20}}>
                                        <div className="col-sm-12">
                                        {
                                            Object.entries(data).length !== 0 && 
                                                <div>
                                                    {
                                                        data.user && <div>
                                                                <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Nombres</th>
                                                                        <th scope="col">Apellido Paterno</th>
                                                                        <th scope="col">Apellido Materno</th>
                                                                        <th scope="col">DNI</th>
                                                                        <th scope="col">Fecha de Nacimiento</th>
                                                                        <th scope="col">Sexo</th>
                                                                        <th scope="col">Acción</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr >
                                                                        <td className="text-center">{data.user?.per_nom}</td>
                                                                        <td className="text-center">{data.user?.per_pat}</td>
                                                                        <td className="text-center">{data.user?.per_mat}</td>
                                                                        <td className="text-center">{data.user?.per_doc}</td>
                                                                        <td className="text-center">{data.user?.fec_nac}</td>
                                                                        <td className="text-center">{data.user?.per_sex}</td>
                                                                        <td className="text-center">
                                                                            <button className="btn_icon_ btn_alternative_" style={{marginLeft: 10}}>
                                                                                <Eye
                                                                                    color={'#fff'}
                                                                                    height="20px"
                                                                                    width="20px"
                                                                                />
                                                                            </button>
                                                                            <button className="btn_icon_ btn_primary_" style={{marginLeft: 10}}>
                                                                                <PencilOutline
                                                                                    color={'#00000'} 
                                                                                    height="20px"
                                                                                    width="20px"
                                                                                />
                                                                            </button>
                                                                            <button className="btn_icon_ btn_danger_" style={{marginLeft: 10}}>
                                                                                <TrashOutline
                                                                                    color={'#00000'}
                                                                                    height="20px"
                                                                                    width="20px"
                                                                                />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    }
                                                </div>
                                                 
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container">
                <div className='row'>
                    <div>
                        <h6 style={{marginTop: 10}}>Registro de nuevo Trabajador</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card_">
                            <div className="card_body_">
                                <div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div>
                                                <label className="label_">Nombre:</label>
                                                <input 
                                                    placeholder="Ingresar documento" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlurSearch}
                                                    onChange={handleChangeSearch}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div>
                                                <label className="label_">Apellido Paterno:</label>
                                                <input placeholder="Ingresar documento" className="input_ w-100"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div>
                                                <label className="label_">Apellido Materno:</label>
                                                <input placeholder="Ingresar documento" className="input_ w-100"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div>
                                                    <label className="label_">Fecha de Nacimiento:</label>
                                                    <input type="date" placeholder="Ingresar documento" className="input_ w-100"/>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div style={{marginTop: 20}}>
                                                <label className="label_">Sexo:</label>
                                                <select className="input_ w-100" name="cars" id="cars" form="carform">
                                                    <option value="M">Masculino</option>
                                                    <option value="F">Femenino</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div style={{marginTop: 20}}>
                                                <button onClick={getUser} style={{marginTop: 25}} type="submit" value="Guardar" placeholder="Ingresar documento" className="btn_ btn_primary_ w-100"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:20}}>
                                    <div className="col-sm-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">N°</th>
                                                <th scope="col">Nombres</th>
                                                <th scope="col">Apellido Paterno</th>
                                                <th scope="col">Apellido Materno</th>
                                                <th scope="col">DNI</th>
                                                <th scope="col">Fecha de Nacimiento</th>
                                                <th scope="col">Alerta</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Ivan</td>
                                                <td>Valverde</td>
                                                <td>Valverde</td>
                                                <td>12345681</td>
                                                <td>12/08/2023</td>
                                                <td>
                                                    <span className="badge_ btn_danger_">10 días</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Nuevo;