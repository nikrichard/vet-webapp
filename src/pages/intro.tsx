//Import Components
import Header from './components/Header'
import Container from './components/Container'

//Import Images
import Photo from './assets/escudo.png'

//Import Icons
import {LogIn, PersonCircle, Videocam, Document, Download} from 'react-ionicons';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

//Import CSS
import styles from '../styles/Intro.module.css';
import Link from 'next/link';

const Intro = ()=>{
    return(
        <div>
            <NavBar/>      
            <section>
              <div className='container'>
                <div className='row'>
                  <div style={{marginTop: 10}}>
                    <div className='alert_' style={{marginBottom: 10}}>
                      <h5 className='text_dark_' style={{fontSize: 14, fontWeight: 600}}>Bienvenido al Sistema de Trámite Documentario Virtual. </h5>
                      <p style={{fontSize: 12}} className="text_dark_">La plataforma de Mesa de Partes Virtual, tiene por objetivo simplificar el proceso de Trámite Documentario; brindando las herramientas necesarias para realizar los diferentes trámites. Ademá de tener en tiempo real el procedimiento que se realiza en tu trámite.</p>
                    </div>
                  </div>
                  <div className="col-sm-12 mx-auto" style={{padding: 5, marginBottom: "10px"}}>
                    <div className='row' style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
                      <div>
                        <span style={{fontWeight:"bold"}} className='text_dark_'>Mis trámites</span>
                        <div className='divider_' style={{marginBottom: 5}}></div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <Link
                              className="item_link_"
                              href={'/auth/signin'}
                              >
                              <div className='card_ bg_dark_'>
                                <div className='card_body_'>
                                  <div className={styles.option_card_}>
                                    <LogIn
                                      color={'#fff'} 
                                      height="35px"
                                      width="35px"
                                    />
                                    <span style={{fontWeight: 600}}>Ingresar</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className='col-md-2'>
                            <Link
                              className="item_link_"
                              href={'/auth/signup'}
                            >
                              <div className='card_ bg_dark_'>
                                <div className='card_body_'>
                                  <div className={styles.option_card_}>
                                    <PersonCircle
                                      color={'#fff'} 
                                      height="35px"
                                      width="35px"
                                    />
                                    <span style={{fontWeight: 600}}>Registrarme</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row' style={{marginTop: 0, marginRight: 5, marginLeft:5}}>
                      <div style={{marginTop: "1rem"}}>
                        <span style={{fontWeight:"bold"}} className='text_dark_'>Aprende de nuestra plataforma</span>
                        <div className='divider_' style={{marginBottom: 5}}></div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <Link
                              className="item_link_"
                              href={''}
                            >
                              <div className='card_ bg_danger_'>
                                <div className='card_body_'>
                                  <div className={styles.option_card_}>
                                    <Videocam
                                      color={'#fff'} 
                                      height="35px"
                                      width="35px"
                                    />
                                    <span>VideoTutoriales</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className='col-md-2'>
                            <Link
                              className="item_link_"
                              href={''}
                            >
                              <div className='card_ bg_danger_'>
                              <div className='card_body_'>
                                  <div className={styles.option_card_}>
                                    <Document
                                      color={'#fff'} 
                                      height="35px"
                                      width="35px"
                                    />
                                    <span>Comprimir Archivos</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className='col-md-2'>
                            <Link
                              className="item_link_"
                              href={''}
                            >
                              <div className='card_ bg_danger_'>
                                <div className='card_body_'>
                                  <div className={styles.option_card_}>
                                    <Download
                                      color={'#fff'} 
                                      height="35px"
                                      width="35px"
                                    />
                                    <span>Descargar AnyDesk</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className='d-flex' style={{width: "100%", marginTop: 30}}>
              <Footer />
            </div>
        </div>
    )
}

export default Intro;