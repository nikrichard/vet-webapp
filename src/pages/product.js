import React, {useState} from "react";
import Image from "next/image";
import Container from "./components/Container";

import Perfil from './assets/perfil_empty.png'

//Import CSS
import styles from '../styles/Profile.module.css';
import { EyeOff, Eye, Search, SearchCircle } from 'react-ionicons';

const Workers = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 10, fontWeight: 600}}>Mantenimiento de Productos</h6>
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
                                                    <input placeholder="Ingresar documento" className="input_ w-100"/>
                                                    <button>
                                                        <Search 
                                                            color={"#fff"}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div>
                                                    <label className="label_">Desde:</label>
                                                    <input type="date" placeholder="Ingresar documento" className="input_ w-100"/>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                                <div>
                                                    <label className="label_">Hasta:</label>
                                                    <input type="date" className="input_ w-100"/>
                                                </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div style={{marginTop: 20}}>
                                                <button className="btn_ btn_secondary_ w-100">Buscar</button>
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
                                                <td>12/08/2023</td>
                                                <td>
                                                    <span className="badge_ btn_danger_">10 días</span>
                                                </td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td>Ivan</td>
                                                <td>Valverde</td>
                                                <td>Valverde</td>
                                                <td>12/08/2023</td>
                                                <td>
                                                    <span className="badge_ btn_success_">10 días</span>
                                                </td>
                                                </tr>
                                                <tr>
                                                <th scope="row">3</th>
                                                <td>Ivan</td>
                                                <td>Valverde</td>
                                                <td>Valverde</td>
                                                <td>12/08/2023</td>
                                                <td>
                                                    <span className="badge_ btn_warning_">10 días</span>
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
        </>
    )
}

export default Workers;