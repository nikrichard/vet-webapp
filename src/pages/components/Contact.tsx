import React, { ReactElement } from "react";
import Link from "next/link";

//Import styles
import styles from './styles/Contact.module.css';

//Import Icons
import { SiWhatsapp } from "react-icons/si";


const Contact : React.FC = () : ReactElement => {
    return(
        <div className={styles.header_contact_}>
            <div>
                <div className={`${styles.div_contact_} container`}>
                    <div>
                        <span style={{color: "#fff", fontSize: 18, fontWeight: 600}}>Comunícate con un asesor</span>
                        <span style={{marginLeft: 20}}>
                            <Link style={{color: "#fff", textDecoration: "none"}} href={'https://wa.me/+51903002161'} target='_blank'>
                                <SiWhatsapp className='secondary_text_' style={{width: 28, height: 28, color: "#fff", marginRight: 10}} />
                                <span>WhatsApp: +51 999887766</span>
                            </Link>  
                        </span>
                    </div>
                    <div>
                        <div>

                        </div>
                        <span>
                            <Link style={{color: "#fff", textDecoration: "none"}} href={'https://wa.me/+51903002161'} target='_blank'>
                                <span>Horario de Atención: 8:00AM - 6:00PM</span>
                            </Link> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;