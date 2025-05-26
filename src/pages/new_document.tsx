import React, {useState} from 'react';
//Import CSS Style
import styles from '../styles/NewDocument.module.css';

//Import Components Bootstrap
import { Modal, Button } from 'react-bootstrap';

import Input from './components/Input';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../pages/assets/escudo.png';
import Perfil from '../pages/assets/perfil_empty.png';

//Import Icons
import {DocumentAttach, Key, Close, Person, Documents, Menu, Trash, SearchCircle} from 'react-ionicons';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import Container from './components/Container';

const RegistroExpediente = () => {
    //Modal States
    const [modalOne, setModalOne] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
    const [modalThree, setModalThree] = useState(false);

    //Modals Handlers
    const handleModalOneShow = () => {
        setModalOne(true)
    }

    const handleModalOneClose = () => {
        setModalOne(false)
    }
    
    const handleModalTwoShow = () => {
        setModalTwo(true)
    }

    const handleModalTwoClose = () => {
        setModalTwo(false)
    }
    
    const handleModalThreeShow = () => {
        setModalThree(true)
    }

    const handleModalThreeClose = () => {
        setModalThree(false)
    }

    return(
        <>  
            <Container>
                <div className='container'>
                    <div className='row'>
                        <h5 style={{marginTop: 10}}>Registro de Expediente</h5>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='alert_' style={{marginTop: 9}}>
                                <h6 style={{fontSize: 14, fontWeight: 600}}>Recomendaciones:</h6>
                                <ol style={{fontSize: 12}}>
                                    <li>Recomendación 1</li>
                                    <li>Recomendación 2</li>
                                    <li>Recomendación 3</li>
                                    <li>Recomendación 4</li>
                                </ol>
                                <p></p>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='card_' onClick={handleModalOneShow}>
                                        <div className='card_body_'>
                                            <div className={styles.instruction_container_}>
                                                <div className='d-flex' style={{marginRight: 10}}>
                                                    <div>
                                                        <div className={styles.instruction_number_}>
                                                            <span>Paso 1</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.instruction_content_}>
                                                        <h6>Seleccionar la Entidad de Destino</h6>
                                                        <p>Selecciona la Entidad de Destino a la cual realizarás el instituciones que trabajan con el sistema</p>
                                                    </div>
                                                </div>
                                                <div className={styles.status_container_}>
                                                    <span className={styles.form_status_} style={{color: "#22c55e"}}>Completado</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='card_'>
                                        <div className='card_body_' onClick={handleModalTwoShow}>
                                            <div className={styles.instruction_container_}>
                                                <div className='d-flex' style={{marginRight: 10}}>
                                                    <div>
                                                        <div className={styles.instruction_number_}>
                                                            <span>Paso 2</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.instruction_content_}>
                                                        <h6>Seleccionar Procedimiento</h6>
                                                        <p>Selecciona la Entidad de Destino a la cual realizarás el instituciones que trabajan con el sistema</p>
                                                    </div>
                                                </div>
                                                <div className={styles.status_container_}>
                                                    <span className={styles.form_status_} style={{color: "red"}}>Incompleto</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='card_'>
                                        <div className='card_body_' onClick={handleModalThreeShow}>
                                            <div className={styles.instruction_container_}>
                                                <div className='d-flex' style={{marginRight: 10}}>
                                                    <div>
                                                        <div className={styles.instruction_number_}>
                                                            <span>Paso 3</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.instruction_content_}>
                                                        <h6>Adjuntar Archivos</h6>
                                                        <p>Selecciona la Entidad de Destino a la cual realizarás el instituciones que trabajan con el sistema</p>
                                                    </div>
                                                </div>
                                                <div className={styles.status_container_}>
                                                    <span className={styles.form_status_}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div style={{marginTop: 10}} className="d-flex justify-content-end">
                                    <button className='btn_ btn_secondary_'>Enviar Trámite</button>
                                    <button style={{marginLeft: 10}} className='btn_ btn_danger_'>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Modals Group*/}
                        {/**MODAL DE ENTIDAD DE DESTINO */}
                        <Modal
                            size='lg'
                            show={modalOne}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                                <div className='row'>
                                    <div style={{padding: 5, margin: 0}}>
                                        <div className='btn_secondary_' style={{padding: 5, borderRadius: 2}}>
                                            <span style={{marginLeft: 5}}>Seleccionar la Entidad</span>
                                        </div>
                                        <div className='row' style={{marginTop: 5}}>
                                            <div className='col-sm-12'>
                                                <label className='label_'>Buscar Entidad:</label>
                                                <div className='content_search_'>
                                                    <input
                                                        className='input_ w-100'
                                                        id='document_number'
                                                        placeholder='Buscar'
                                                        disabled={false}
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
                                        </div>
                                        <div className='row'>
                                            <div style={{marginTop: 10}}>
                                                <div className='table-responsive'>
                                                    <table className="table table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">RUC</th>
                                                                <th scope="col">Razón Social</th>
                                                                <th scope="col">Horario de Atención</th>
                                                                <th scope="col">Ubicación</th>
                                                                <th scope="col">Acción</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className={styles.table_content}>
                                                            <tr>
                                                                <td>20172268430</td>
                                                                <td>MUNICIPALIDAD PROVINCIAL DE HUARAZ</td>
                                                                <td>LUNES A VIERNES DE 8:00AM - 06:00PM</td>
                                                                <td>ANCASH/HUARAZ/HUARAZ</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>20172268430</td>
                                                                <td>MUNICIPALIDAD PROVINCIAL DE HUARAZ</td>
                                                                <td>LUNES A VIERNES DE 8:00AM - 06:00PM</td>
                                                                <td>ANCASH/HUARAZ/HUARAZ</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>20172268430</td>
                                                                <td>MUNICIPALIDAD PROVINCIAL DE HUARAZ</td>
                                                                <td>LUNES A VIERNES DE 8:00AM - 06:00PM</td>
                                                                <td>ANCASH/HUARAZ/HUARAZ</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn_ btn_primary_'>
                                    Guardar
                                </button>
                                <button className='btn_ btn_danger_' onClick={handleModalOneClose}>Cancelar</button>
                            </Modal.Footer>
                        </Modal>
                        {/**MODAL DE PROCEDIMIENTO */}
                        <Modal
                            size='lg'
                            show={modalTwo}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                                <div className='row'>
                                    {/*Datos del trámite*/}
                                    <div style={{padding: 5, margin: 0}}>
                                        <div className='btn_secondary_' style={{padding: 5, borderRadius: 2}}>
                                            <span style={{marginLeft: 5}}>Datos del trámite</span>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label className='label_'>RUC</label>
                                                <input className='input_ w-100' placeholder='20172268430'/>
                                            </div>
                                            <div className='col-md-6'>
                                                <label className='label_'>Entidad o Institución</label>
                                                <input className='input_ w-100' placeholder='MUNICIPALIDAD PROVINCIAL DE HUARAZ'/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-9'>
                                                    <label htmlFor="" className='label_'>Seleccionar Documento:</label>
                                                    <div className='content_search_'>    
                                                        <input type="text" className='input_ w-100'/>
                                                        <button>
                                                            <SearchCircle
                                                                color={'#3286BE'} 
                                                                height="30px"
                                                                width="30px"
                                                            />
                                                        </button>
                                                    </div>
                                                
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='label_' htmlFor="">N° Documento (Opcional):</label>
                                                <input 
                                                    className='input_ w-100'
                                                />                                                
                                            </div> 
                                        </div>
                                        <div className='row'>
                                            <div>
                                                <label htmlFor="" className='label_'>Seleccionar Documento:</label>
                                                <div className='content_search_'>    
                                                    <input type="text" className='input_ w-100'/>
                                                    <button>
                                                        <SearchCircle
                                                            color={'#3286BE'} 
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop: 10}}>
                                            <div className='div'>
                                                <h6 className='text-center'>Linea de tiempo del trámite a presentar</h6>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <label className='label_'>Asunto:</label>
                                                <textarea className='text_area input_ w-100' rows={4} placeholder= "SOLICITUD DE DIVORCIO"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn_ btn_primary_'>
                                    Guardar
                                </button>
                                <button className='btn_ btn_danger_' onClick={handleModalTwoClose}>Cancelar</button>
                            </Modal.Footer>
                        </Modal>
                        {/**MODAL DE ADJUNTAR ARCHIVOS */}
                        <Modal
                            size='xl'
                            show={modalThree}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                                <div className='row'>
                                    {/*Documentos Adjuntos*/}
                                    <div style={{padding: 10, margin: 0}}>
                                        <div className='btn_info_' style={{padding: 5, borderRadius: 2}}>
                                            <span style={{marginLeft: 5}}>Adjuntar Documentos</span>
                                        </div>
                                        {/*<div style={{marginTop: 5}}>
                                            <div className="alert alert-warning" role="alert" style={{paddingTop:5, paddingBottom: 5}}>
                                                <span style={{fontSize: 13}}>¡Recuerde que ahora puede adjuntar documentos adicionales a los!</span>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-10'>
                                                <label htmlFor="formFileSm" className="label_">Seleccionar archivo</label>
                                                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                                            </div>
                                        </div>*/}
                                        <div className='row' style={{marginTop: 5}}>
                                            <div className='col-sm-3'>
                                            <label className='label_'>Seleccionar Requisito:</label>
                                            <select className="form-select form-select-sm" aria-label="Default select example">
                                                <option selected>Seleccionar</option>
                                                <option value="1">DNI</option>
                                                <option value="2">Solicitud</option>
                                                <option value="3">Partida de nacimiento</option>
                                            </select>
                                            </div>
                                            <div className='col-sm-4'>
                                                <label htmlFor="formFileSm" className="label_">Seleccionar archivo</label>
                                                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                                            </div>
                                            <div className='col-sm-5' style={{display: "flex", justifyContent: "space-between"}}>
                                                <button style={{marginTop:23}} className='btn_ btn_primary_'>Añadir a lista</button>
                                                <button style={{marginTop:23}} className='btn_ btn_info_'>Agregar documento</button>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop: 10}}>
                                            <div className='col-sm-12'>
                                                <div className='table-responsive'>
                                                    <table className="table table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Descripción Doc.</th>
                                                                <th scope="col">N° Doc.</th>
                                                                <th scope="col">Fch. Doc.</th>
                                                                <th scope="col">Nombre Arch.</th>
                                                                <th scope="col">Tip. Arch.</th>
                                                                <th scope="col">Cnt. Pag.</th>
                                                                <th scope="col">Peso</th>
                                                                <th scope="col">Acción</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className={styles.table_content}>
                                                            <tr>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td>Para trámite</td>
                                                                <td>Oficina</td>
                                                                <td style={{textAlign: "center"}}>
                                                                    <Trash
                                                                        style={{marginLeft: 10}}
                                                                        color={'#FB2828'} 
                                                                        height="18px"
                                                                        width="18px"
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn_ btn_primary_'>
                                    Guardar
                                </button>
                                <button className='btn_ btn_danger_' onClick={handleModalThreeClose}>Cancelar</button>
                            </Modal.Footer>
                        </Modal>
                </div>
            </Container>
        </>
    )
}

export default RegistroExpediente;