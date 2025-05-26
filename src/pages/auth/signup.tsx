import React, {useState} from 'react';
//Import Components
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';

import Input from "../components/Input";
import Link from "next/link";
import Image from "next/image";

//Import CSS MODULE
import styles from '../../styles/SignupRequest.module.css';

import Logo from '../assets/siam_logo.png';
import TextArea from '../components/TextArea';

const RegistroForm = ()=>{
    return(
        <>  
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <div className="card_" style={{marginTop: "3rem", padding: 8}}>
                            <div className='card_body_'>
                                <div className={styles.head_signup_request_}>
                                    <span>Formulario de Registro</span>
                                    <Link className={`${styles.logo}`} href="/">
                                        <Image
                                            className='img-fluid'
                                            src={Logo}
                                            width={100}
                                            height={100}
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                                <div className="divider"></div>
                                <div style={{width: "100%", marginTop: 10}}>
                                    <div className="row">
                                        <form>
                                            <div className='row'>
                                                <div>
                                                <label className='label_' htmlFor="">DNI/RUC:</label>
                                                <input
                                                    className='input_ w-100'
                                                    type='text'
                                                    placeholder="Ingresa número de documento"
                                                    disabled={false}/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <label className='label_' htmlFor="">Apellido Paterno:</label>
                                                    <input
                                                        className='input_ w-100'
                                                        type='text'
                                                        placeholder="Ingresa tu número de celular"
                                                        disabled={false}/>
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='label_' htmlFor="">Apellido Materno:</label>
                                                    <input
                                                        className='input_ w-100'
                                                        type='text'
                                                        placeholder="Ingresa un número de celular"
                                                        disabled={false}/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <label className='label_' htmlFor="">Nombres:</label>
                                                    <input
                                                        className='input_ w-100'
                                                        type='text'
                                                        placeholder="Ingresar correo electrónico"
                                                        disabled={false}/>
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='label_' htmlFor="">Fecha de Nacimiento:</label>
                                                    <input
                                                        className='input_ w-100'
                                                        type='date'
                                                        placeholder="Ingresa tu contraseña"
                                                        disabled={false}/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className={styles.content_footer}>
                                                    <input className="btn_ btn_secondary_" type="submit" value="Registrar"/>
                                                    <input className="btn_ btn_danger_" type="submit" value="Cancelar"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistroForm;