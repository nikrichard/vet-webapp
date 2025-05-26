import React, {useState} from 'react';
import Image from 'next/image';
import styles from './styles/NavBar.module.css';

//Import Images
import Logo from '../assets/logo_veterinaria.png'
import { Menu } from 'react-ionicons';

const NavBar = () => {
    return(
        <>  
            <div className={styles.header_}>
                <a className={styles.logo_}>
                    <Image
                        className='img-fluid'
                        src={Logo}
                        width={160}
                        height={160}
                        alt="Logo"
                    />
                </a>
                {/*<div className={styles.title_}>
                    <span className='text-end'>HUELLITAS</span>
                    <span className='text-end text_orange_'> SOLIDARIAS</span>
                </div>*/}
            </div>
        </>       
    )
}

export default NavBar;