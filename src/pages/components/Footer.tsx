import Link from 'next/link';

//Import CSS
import styles from './styles/Footer.module.css';

//Import Icons
import {
        LogoFacebook,
        LogoTwitter,
        LogoInstagram,
        LogoYoutube} from 'react-ionicons';

const Footer = ()=> {
    return(
        <>
            <div className={styles.footer}>
                <div className='container'>
                    <div className='row'>
                        <div className="divider"></div>
                        <div className={styles.footer_content}>
                            <span className={styles.head}>© 2023 by SIAMsoft</span>
                            <ul className={styles.social_list}>
                                <li>
                                    <Link target="_blank" href="https://web.facebook.com/softwareparamunicipalidades">
                                        <LogoFacebook
                                            color={"#99acaf"} 
                                            height="20px"
                                            width="20px"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="">
                                        <LogoTwitter
                                            color={"#99acaf"} 
                                            height="20px"
                                            width="20px"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="">
                                        <LogoInstagram
                                            color={"#99acaf"} 
                                            height="20px"
                                            width="20px"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://www.youtube.com/channel/UCRe-N-s8DMJ9FWdEA0hoIoA">
                                        <LogoYoutube
                                            color={"#99acaf"} 
                                            height="20px"
                                            width="20px"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;