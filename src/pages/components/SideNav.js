import React, {useState} from 'react';
import styles from './styles/SideNav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Close, 
            Person, 
            Documents, 
            DocumentAttach, 
            Key,
            Home,
            LogOut
        } from 'react-ionicons';
import Perfil from '../assets/perfil_empty.png';
import { FunctionBody } from 'typescript';

const SideNav = (props) => {

    return(
        <>
            <div className={`${styles.sidenav_} ${props.status_sidenav && `${styles.sidenav_visible_}`}`}>
                <div className={styles.content_btn_}>
                    <button className={styles.close_} onClick={()=>props.handleSidenav()}>
                        <Close
                            color={'#3C3C3C'} 
                            height="40px"
                            width="40px"
                        />
                    </button>
                </div>
                <div className={styles.info_user}>
                    {/*<h6>Administrador</h6>
                    <span>70236289</span><br/>
                    <span>johndoe@gmail.com</span>*/}
                </div>
                <div className={styles.menu_container}>
                    <ul className={styles.menu_list}>
                        <li>
                            <Home
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/' className={styles.nav_link}>Dashboard</Link>
                        </li>
                        <li>
                            <Person
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/pos/' className={styles.nav_link}>POS</Link>
                        </li>
                        <li>
                            <Person
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/owner/owners/' className={styles.nav_link}>Propietarios</Link>
                        </li>
                        <li>
                            <Person
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/owner/pets/' className={styles.nav_link}>Mascotas</Link>
                        </li>
                        <li>
                            <Person
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/product/products/' className={styles.nav_link}>Productos</Link>
                        </li>
                        <li>
                            <Documents
                                style={{marginLeft: 10, marginRight: 5}}
                                color={'#3C3C3C'} 
                                height="18px"
                                width="18px"
                            /><Link href='/product/categories/' className={styles.nav_link}>Categorias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav;