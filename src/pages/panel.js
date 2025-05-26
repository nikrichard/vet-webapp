import React, {useState} from 'react';
//Import CSS Style
import styles from '../styles/Panel.module.css';
import Input from './components/Input';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../pages/assets/siam_logo.png';
import Perfil from '../pages/assets/perfil_empty.png';

//Import Icons
import {DocumentAttach, Key, Close, Person, Documents, SearchCircle, AddCircleOutline, ChevronDown, Eye} from 'react-ionicons';
import Container from './components/Container';

import { Modal } from 'react-bootstrap';
import Alert from './components/Alert';

const Panel = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>  
            <Container>
                <div className='container'>
                    <div className='row' style={{marginTop: 10}}>
                        <div className='col-md-12'>
                            <h5 className='w-100'>Dashboard</h5>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Enero</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Febrero</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Marzo</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Abril</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Mayo</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Junio</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Julio</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Agosto</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Setiembre</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Octubre</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Noviembre</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={`card_ ${styles.card_entity}`}>
                                        <div className={styles.card_content}>
                                            <div className={styles.info_}>
                                            <h5>Diciembre</h5>
                                            <span>4 cumpleaños</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                    {/**Modal Status Document https://aukera.es/blog/tabla-html-responsive/*/}
                    <Modal
                        size='lg'
                        onHide={handleClose}
                        show={show}
                        backdrop="static"
                        keyboard={false}
                    >   
                        <div>
                            <div className={styles.modal_header_}>
                                <span>CONSULTA DNI</span>
                                <button onClick={handleClose}>
                                    <Close
                                        color={'#334155'} 
                                        height="20px"
                                        width="20px"
                                    />
                                </button>
                            </div>
                        </div>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row' style={{marginBottom: 10}}>
                                        <div className='col-md-5'>
                                            <label className='label_'>Ingresar número de DNI:</label>
                                            <div className='content_search_'>
                                                <input
                                                    style={{width: 280}} 
                                                    className='input_'
                                                />
                                                <button>
                                                    <SearchCircle
                                                        color={'#3286BE'} 
                                                        height="30px"
                                                        width="30px"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div style={{marginTop: 35}}>
                                                <Link href='/new_document' className='btn_ btn_secondary_ link_'>
                                                    Nueva busqueda
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='card_'>
                                                <div className='card_header_'>
                                                    <span style={{fontSize: 13, padding: 2}}>cód: 0000 - Consulta realizada correctamente</span>
                                                </div>
                                                <div className='card_body_'>
                                                    <div className='row'>
                                                        <div className='col-md-8'>
                                                            <table className={styles.table_} style={{width: "100%"}}>
                                                                <tr>
                                                                    <th>Apellido Paterno:</th>
                                                                    <td>Mendoza</td>
                                                                </tr>  
                                                                <tr>
                                                                    <th>Apellido Materno:</th>
                                                                    <td>Suarez</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Nombre:</th>
                                                                    <td>Mario Joaquin Alfredo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Estado Civil:</th>
                                                                    <td>Viudo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Dirección:</th>
                                                                    <td>Av. la paz 123</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Restricción:</th>
                                                                    <td>Ninguno</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Ubigeo:</th>
                                                                    <td>PUNO/PUNO/PUNO</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div style={{backgroundColor: 'red'}}>
                                                                <Image
                                                                    className='img-fluid'
                                                                    src={Perfil}
                                                                    alt="Logo"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className='table-responsive'>
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Administrado</th>
                                                    <th scope="col">N° Doc.</th>
                                                    <th scope="col">Asunto</th>
                                                    <th scope="col">Arch. Adj.</th>
                                                    <th scope="col">Arch. Adj. en el proceso</th>
                                                    <th scope="col">Estado</th>
                                                    <th scope="col">Proceso</th>
                                                </tr>
                                            </thead>
                                            <tbody className={styles.table_content}>
                                                <tr>
                                                    <td>01322051 CENTENO CHICANI ROBERTO</td>
                                                    <td>SOLICITUD N° 00000000</td>
                                                    <td>DIVORCIO XXXXX</td>
                                                    <td className='text-center'>
                                                        <span className='badge_ text_white_ bg_dark_'>4 Principales</span>
                                                    </td>
                                                    <td className='text-center'>2</td>
                                                    <td className='text-center'>
                                                        <span className='bg_primary_ badge_ text_white_'>En tramite</span>
                                                    </td>
                                                    <td className='text-center'>
                                                        <span className='bg_alternative_ badge_ text_white_'>37.50%</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className={styles.step_container_}>
                                        <div>
                                            <div className={styles.step_number_}>
                                                <span className='text_white_'>1</span>
                                            </div>
                                        </div>
                                        <div className='card_ w-100' style={{marginLeft: 10}}>
                                            <div className='card_header_ bg_alternative_ text-center'>
                                                <span className='text_white_' style={{fontSize: 11}}>0014 SUB GERENCIA DE ATENCION AL USUARIO Y TRAMITE DOCUMENTARIO / 178 MESA DE PARTES / / MAMANI GOYZUETA RUTH DIANA</span>
                                            </div>
                                            <div className='card_body_'>
                                                <div className='d-flex justify-content-between'>
                                                    <div className={styles.step_content_}>
                                                        <div className='d-flex justify-content-between'>
                                                            <h6 style={{fontSize: 12, fontWeight: 600}}>Glosa de Envío: <span style={{fontWeight: 500}}>INICIO DE TRÁMITE</span></h6>
                                                            <div className={styles.dates_content_}>
                                                                <ul>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Recibido</span>: 21/02/2023 15:38:51</li>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Enviado</span>: 21/02/2023 15:37:18</li>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Tiempo</span>: -00:01:32</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='divider_'></div>
                                                        <div className={styles.derivate_file_}>
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-md-5'>
                                                                        <h6 style={{fontWeight: 600, fontSize: 13}}>Expediente Derivado por documento interno</h6>
                                                                        <ul className={styles.info_derivate_}>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Doc. Interno</span>: INFORME</li>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>N°</span>: 00000001</li>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Fecha</span>: 21/02/2023</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className='col-md-2'>
                                                                        <button className='btn_ btn_danger_' style={{fontSize: 10, marginLeft: 30}}>Ver Documento</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='divider_'></div>
                                                        </div>
                                                        <div style={{marginTop: 5}}>
                                                            <div className='row'>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#archived_documents" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                                                    <span>Archivados y Desarchivados</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="archived_documents" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-3'>
                                                                                                <table className={styles.table_} style={{width: "100%"}}>
                                                                                                    <tr>
                                                                                                        <th>Fecha:</th>
                                                                                                        <td>07/03/2023 15:36:21</td>
                                                                                                    </tr>  
                                                                                                    <tr>
                                                                                                        <th>Estado:</th>
                                                                                                        <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Resultado:</th>
                                                                                                        <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                            <div className='col-md-9'>
                                                                                                <div className='table-responsive'>
                                                                                                    <table style={{marginTop: 5}} className="table table-sm">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody className={styles.table_content}>
                                                                                                            <tr>
                                                                                                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos: <span>(4)</span></h6>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div><div className='divider_'></div></div>
                                                                                    <div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-3'>
                                                                                                <table className={styles.table_} style={{width: "100%"}}>
                                                                                                    <tr>
                                                                                                        <th>Fecha:</th>
                                                                                                        <td>07/03/2023 15:36:21</td>
                                                                                                    </tr>  
                                                                                                    <tr>
                                                                                                        <th>Estado:</th>
                                                                                                        <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Resultado:</th>
                                                                                                        <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                            <div className='col-md-9'>
                                                                                                <div className='table-responsive'>
                                                                                                    <table style={{marginTop: 5}} className="table table-sm">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody className={styles.table_content}>
                                                                                                            <tr>
                                                                                                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos: <span>(4)</span></h6>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div><div className='divider_'></div></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#internal_document" aria-expanded="true" aria-controls="internal_document">
                                                                                    <span>Archivos Adjuntos del Documento Interno</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="internal_document" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div className='row'>
                                                                                        <div className='col-md-3'>
                                                                                            <table className={styles.table_} style={{width: "100%"}}>
                                                                                                <tr>
                                                                                                    <th>Fecha:</th>
                                                                                                    <td>07/03/2023 15:36:21</td>
                                                                                                </tr>  
                                                                                                <tr>
                                                                                                    <th>Estado:</th>
                                                                                                    <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>Resultado:</th>
                                                                                                    <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </div>
                                                                                        <div className='col-md-9'>
                                                                                            <div className='table-responsive'>
                                                                                                <table style={{marginTop: 5}} className="table table-sm">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className={styles.table_content}>
                                                                                                        <tr>
                                                                                                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='row'>
                                                                                        <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos:</h6>
                                                                                        <div><div className='divider_'></div></div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#shipping_files" aria-expanded="true" aria-controls="shipping_files">
                                                                                    <span>Archivos Adjuntos del Envío</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="shipping_files" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div className='row'>
                                                                                        <div className='col-md-3'>
                                                                                            <table className={styles.table_} style={{width: "100%"}}>
                                                                                                <tr>
                                                                                                    <th>Fecha:</th>
                                                                                                    <td>07/03/2023 15:36:21</td>
                                                                                                </tr>  
                                                                                                <tr>
                                                                                                    <th>Estado:</th>
                                                                                                    <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>Resultado:</th>
                                                                                                    <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </div>
                                                                                        <div className='col-md-9'>
                                                                                            <div className='table-responsive'>
                                                                                                <table style={{marginTop: 5}} className="table table-sm">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className={styles.table_content}>
                                                                                                        <tr>
                                                                                                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='row'>
                                                                                        <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos:</h6>
                                                                                        <div><div className='divider_'></div></div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    </div>
                                </div>                                
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className={styles.step_container_}>
                                        <div>
                                            <div className={styles.step_number_}>
                                                <span className='text_white_'>2</span>
                                            </div>
                                        </div>
                                        <div className='card_ w-100' style={{marginLeft: 10}}>
                                            <div className='card_header_ bg_alternative_ text-center'>
                                                <span className='text_white_' style={{fontSize: 11}}>0014 SUB GERENCIA DE ATENCION AL USUARIO Y TRAMITE DOCUMENTARIO / 178 MESA DE PARTES / / MAMANI GOYZUETA RUTH DIANA</span>
                                            </div>
                                            <div className='card_body_'>
                                                <div className='d-flex justify-content-between'>
                                                    <div className={styles.step_content_}>
                                                        <div className='d-flex justify-content-between'>
                                                            <h6 style={{fontSize: 12, fontWeight: 600}}>Glosa de Envío: <span style={{fontWeight: 500}}>INICIO DE TRÁMITE</span></h6>
                                                            <div className={styles.dates_content_}>
                                                                <ul>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Recibido</span>: 21/02/2023 15:38:51</li>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Enviado</span>: 21/02/2023 15:37:18</li>
                                                                    <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Tiempo</span>: -00:01:32</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className='divider_'></div>
                                                        <div className={styles.derivate_file_}>
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-md-5'>
                                                                        <h6 style={{fontWeight: 600, fontSize: 13}}>Expediente Derivado por documento interno</h6>
                                                                        <ul className={styles.info_derivate_}>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Doc. Interno</span>: INFORME</li>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>N°</span>: 00000001</li>
                                                                            <li><span style={{fontWeight: 600, textDecoration: "underline"}}>Fecha</span>: 21/02/2023</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className='col-md-2'>
                                                                        <button className='btn_ btn_danger_' style={{fontSize: 10, marginLeft: 30}}>Ver Documento</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='divider_'></div>
                                                        </div>
                                                        <div style={{marginTop: 5}}>
                                                            <div className='row'>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#archived_documents" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                                                    <span>Archivados y Desarchivados</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="archived_documents" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-3'>
                                                                                                <table className={styles.table_} style={{width: "100%"}}>
                                                                                                    <tr>
                                                                                                        <th>Fecha:</th>
                                                                                                        <td>07/03/2023 15:36:21</td>
                                                                                                    </tr>  
                                                                                                    <tr>
                                                                                                        <th>Estado:</th>
                                                                                                        <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Resultado:</th>
                                                                                                        <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                            <div className='col-md-9'>
                                                                                                <div className='table-responsive'>
                                                                                                    <table style={{marginTop: 5}} className="table table-sm">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody className={styles.table_content}>
                                                                                                            <tr>
                                                                                                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos: <span>(4)</span></h6>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div><div className='divider_'></div></div>
                                                                                    <div>
                                                                                        <div className='row'>
                                                                                            <div className='col-md-3'>
                                                                                                <table className={styles.table_} style={{width: "100%"}}>
                                                                                                    <tr>
                                                                                                        <th>Fecha:</th>
                                                                                                        <td>07/03/2023 15:36:21</td>
                                                                                                    </tr>  
                                                                                                    <tr>
                                                                                                        <th>Estado:</th>
                                                                                                        <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <th>Resultado:</th>
                                                                                                        <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </div>
                                                                                            <div className='col-md-9'>
                                                                                                <div className='table-responsive'>
                                                                                                    <table style={{marginTop: 5}} className="table table-sm">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody className={styles.table_content}>
                                                                                                            <tr>
                                                                                                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='row'>
                                                                                            <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos: <span>(4)</span></h6>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='col-md-3'>
                                                                                                <div className='card_ bg_alternative_'>
                                                                                                    <div className='card_body_' >
                                                                                                        <div className={styles.content_file_}>
                                                                                                            <div className={styles.info_file_}>
                                                                                                                <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                                <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                            </div>
                                                                                                            
                                                                                                                <button>
                                                                                                                    <Eye
                                                                                                                        color={'#fff'} 
                                                                                                                        height="23px"
                                                                                                                        width="23px"
                                                                                                                    />
                                                                                                                </button>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div><div className='divider_'></div></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#internal_document" aria-expanded="true" aria-controls="internal_document">
                                                                                    <span>Archivos Adjuntos del Documento Interno</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="internal_document" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div className='row'>
                                                                                        <div className='col-md-3'>
                                                                                            <table className={styles.table_} style={{width: "100%"}}>
                                                                                                <tr>
                                                                                                    <th>Fecha:</th>
                                                                                                    <td>07/03/2023 15:36:21</td>
                                                                                                </tr>  
                                                                                                <tr>
                                                                                                    <th>Estado:</th>
                                                                                                    <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>Resultado:</th>
                                                                                                    <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </div>
                                                                                        <div className='col-md-9'>
                                                                                            <div className='table-responsive'>
                                                                                                <table style={{marginTop: 5}} className="table table-sm">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className={styles.table_content}>
                                                                                                        <tr>
                                                                                                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='row'>
                                                                                        <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos:</h6>
                                                                                        <div><div className='divider_'></div></div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                                                        <div className="accordion-item">
                                                                            <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_header_} data-bs-toggle="collapse" data-bs-target="#shipping_files" aria-expanded="true" aria-controls="shipping_files">
                                                                                    <span>Archivos Adjuntos del Envío</span>
                                                                                    <ChevronDown
                                                                                        color={'#3286BE'} 
                                                                                        height="20px"
                                                                                        width="20px"
                                                                                    />
                                                                                </div>
                                                                            </h4>
                                                                            <div id="shipping_files" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                                                <div className={styles.accordion_body_}>
                                                                                    <div className='row'>
                                                                                        <div className='col-md-3'>
                                                                                            <table className={styles.table_} style={{width: "100%"}}>
                                                                                                <tr>
                                                                                                    <th>Fecha:</th>
                                                                                                    <td>07/03/2023 15:36:21</td>
                                                                                                </tr>  
                                                                                                <tr>
                                                                                                    <th>Estado:</th>
                                                                                                    <td><span className='bg_danger_ badge_ text_white_'>Archivado</span></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <th>Resultado:</th>
                                                                                                    <td><span className='bg_primary_ badge_ text_white_'>Positivo</span></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </div>
                                                                                        <div className='col-md-9'>
                                                                                            <div className='table-responsive'>
                                                                                                <table style={{marginTop: 5}} className="table table-sm">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th style={{fontSize: 10, padding: 2}} scope="col">Descripción</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody className={styles.table_content}>
                                                                                                        <tr>
                                                                                                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti accusamus esse! Consequuntur, sunt expedita esse magni est, at impedit fugiat facere pariatur totam veniam autem natus. Modi, delectus dolor?</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='row'>
                                                                                        <h6 style={{fontWeight: 600, fontSize: 11}}>Documentos Adjuntos:</h6>
                                                                                        <div><div className='divider_'></div></div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-md-3'>
                                                                                            <div className='card_ bg_alternative_'>
                                                                                                <div className='card_body_' >
                                                                                                    <div className={styles.content_file_}>
                                                                                                        <div className={styles.info_file_}>
                                                                                                            <span>Doc. ACT.ENT 00000011 07/03/2023</span><br/>
                                                                                                            <span>formato de solicitud para divorcio.pdf.pdf</span>
                                                                                                        </div>
                                                                                                        
                                                                                                            <button>
                                                                                                                <Eye
                                                                                                                    color={'#fff'} 
                                                                                                                    height="23px"
                                                                                                                    width="23px"
                                                                                                                />
                                                                                                            </button>
                                                                                                        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    </div>*/}
                                </div>                                
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
        </>
    )
}

export default Panel;