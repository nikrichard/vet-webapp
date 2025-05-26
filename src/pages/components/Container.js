import React, {useState, ReactNode} from 'react';

//Import Components
import NavBar from "./NavBar";
import SideNav from './SideNav';

//Import CSS
import styles from './styles/Container.module.css';

//Import Icons 
import { Menu } from 'react-ionicons';

const Container = ({children}) => {
    const[sideStatus, setSideStatus] = useState(false);
    const handleSidenav = () => {
        setSideStatus(!sideStatus);
    }
    return(
        <div>
            <NavBar/>
            <div className={styles.toogle_content_}>
                <div className='d-flex justify-content-end'>
                    <button className={styles.toogle_} onClick={handleSidenav}>
                        <Menu
                            color={'#fff'} 
                            height="27px"
                            width="27px"
                        />
                    </button>
                </div>
            </div>
            <div className='d-flex'>
                <SideNav 
                    status_sidenav = {sideStatus}
                    handleSidenav = {handleSidenav}
                ></SideNav>
                <div className='w-100'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container;