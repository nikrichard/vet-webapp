import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Container from "./components/Container";

import Perfil from './assets/perfil_empty.png'

//Import CSS
import { EyeOff, Eye, Search, SearchCircle, Pencil, Trash } from 'react-ionicons';

const initCategories = {
    success: '',
    categories: []
}

const initForm = {
    description: ''
}

const Categorie = () => {
    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>CLINICA VETERINARIA MUNICIPAL - MUNICIPALIDAD DISTRITAL JACOBO HUNTER</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>PÁGINA EN MANTENIMIENTO</h6>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Categorie;