import React, {useState} from 'react';
//Import Components
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';

import Input from "../components/Input";
import Link from "next/link";
import Image from "next/image";

//Import CSS MODULE
import styles from '../../styles/Signup.module.css';

import Logo from '../assets/siam_logo.png';
import TextArea from '../components/TextArea';

const SignUp = () => {
    return(
        <>  
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <div className="card_" style={{marginTop: "3rem", padding: 8}}>
                            <div className='card_body_'>
                                <div className={styles.head_login}>
                                    <span>Formulario de Solicitud de Cuenta</span>
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
                                                <label className='label_'>DNI/RUC:</label>
                                                <input
                                                    className='input_ w-100'
                                                    placeholder="Ingresa número de documento"
                                                    disabled={false}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label className='label_'>Celular:</label>
                                                <input
                                                    className='input_ w-100' 
                                                    placeholder="Ingresa tu número de celular"
                                                    disabled={false}/>
                                            </div>
                                            <div className='col-md-6'>
                                                <label className='label_'>Celular 2:</label>
                                                <input
                                                    className='input_ w-100' 
                                                    placeholder="Ingresa un número de celular"
                                                    disabled={false}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label className='label_'>Correo Electrónico:</label>
                                                <input
                                                    className='input_ w-100' 
                                                    placeholder="Ingresar correo electrónico"
                                                    disabled={false}/>
                                            </div>
                                            <div className='col-md-6'>
                                                <label className='label_'>Repetir Correo Electrónico:</label>
                                                <input
                                                    className='input_ w-100' 
                                                    placeholder="Ingresa tu contraseña"
                                                    disabled={false}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div>
                                                <label className='label_'>Observación:</label>
                                                <textarea
                                                    className='input_ w-100'
                                                    placeholder="Ingresa alguna obervación que tenga"
                                                    disabled={false}
                                                    rows={5}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className={styles.content_footer}>
                                                <input className="btn_ btn_secondary_" type="submit" value="Solicitar Cuenta"/>
                                                <input style={{marginLeft: 5}} className="btn_ btn_danger_" type="button" value="Cancelar"/>
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

export default SignUp;