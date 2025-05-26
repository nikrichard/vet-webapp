import React, {useState} from 'react';
//Import Components
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import { Modal, Button } from 'react-bootstrap';

import Link from "next/link";
import Image from "next/image";
import { EyeOff, Eye, Search, SearchCircle } from 'react-ionicons';

//Import CSS MODULE
import styles from '../../styles/Signin.module.css';
import Logo from '../assets/hunter.png';

const Template = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputPassword = ():void =>{
        setShowPassword(!showPassword);
    }

    return(
        <>  
            <div className="container">
                <div className="row">
                    <div className={`col-sm-4 mx-auto ${styles.body_login_}`}>
                        <div>
                            <div className="card_" style={{padding: 8}}>
                                <div className='card_body_'>
                                    <div className={styles.head_login}>
                                        <span>PVL<br/>Muni Jacobo Hunter</span>
                                        <Link className={`${styles.logo}`} href="/">
                                            <Image
                                                className='img-fluid'
                                                src={Logo}
                                                width={60}
                                                height={60}
                                                alt="Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="divider"></div>
                                    <div style={{width: "100%", marginTop: 10}}>
                                        <div className="row">
                                            <form>
                                                <label className='label_ w-100'>Usuario:</label>
                                                <input
                                                    type="text"
                                                    className='input_ w-100'
                                                    placeholder="Ingresa tu usuario"
                                                    disabled={false}/>
                                                <label className='label_ w-100'>Contraseña:</label>
                                                <div className='pass_input_'>
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        className='input_ w-100'
                                                        placeholder="Ingresa tu contraseña"
                                                        disabled={false}
                                                    />
                                                    <div className='view_pass_icon_' onClick={handleInputPassword}>
                                                        {
                                                            showPassword ? <EyeOff
                                                                                color={'#3286BE'} 
                                                                                height="18px"
                                                                                width="18px"
                                                                            /> :
                                                                            <Eye
                                                                                color={'#3286BE'} 
                                                                                height="18px"
                                                                                width="18px"
                                                                            />
                                                        }
                                                    </div>
                                                </div>
                                                <div style={{marginTop: 12}}>
                                                    <input className="btn_ btn_secondary_ w-100" type="submit" value="Ingresar"/>
                                                </div>
                                            </form>
                                        </div>
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

export default Template