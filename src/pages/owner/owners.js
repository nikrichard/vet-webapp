import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

import Perfil from '../assets/perfil_empty.png'

//Import CSS
import styles from '../../styles/Profile.module.css';
import { EyeOff, Settings, Search, SearchCircle, Pencil, Trash } from 'react-ionicons';

const initOwners = {
    success: '',
    owners: []
}

const initForm = {
    description: ''
}

const Owners = () => {
    const [owners, setOwners] = useState(initOwners)
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); //Inicializamos página actual
    const pageSize = 10; //Para calcular el número inicial de "from"

    const [form, setForm] = useState(initForm);
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        getOwners(1);
    }, []);

    //Método para mostrar categorias
    //Método para mostrar productos
    async function getOwners(page=1){
        try {
            const from = (page-1) * pageSize;
            const res = await fetch(`/api/owner/owners?from=${from}`);
            const data = await res.json();
            setOwners(data.owners);
            setTotal(data.total)
            setCurrentPage(page)
        } catch (error) {
            console.error('Error al cargar categorías:', error);  
        }
    }

    //Método para eliminar categoria
    async function deleteCategory(categoria, id) {
        try{
            const confirmarEliminacion = window.confirm(`¿Estas seguro que deseas eliminar la categoria ${categoria}?`);
            if(confirmarEliminacion){
                const response = await axios.delete(`/api/product/categorie`,{
                    data: {
                        id: id
                    }
                });
                getOwners()
                alert(response.data.message);
            }else{
                return
            }
        }catch (error) {
            console.error('Error al eliminar categoría:', error);
            alert('No se pudo eliminar la categoría');
        }
    }

    //Método para cambiar de página
    const totalPages = Math.ceil(total/pageSize);
    function handlePageChange(page){
        if (page < 1 || page > totalPages) return;
        getOwners(page);
    }

    //Método para realizar la busqueda de categorias
    async function getCategoriesBySearch(description){
        try {
            const res = await axios.get(`/api/product/categorie?description=${description}`);
            setOwners(res.data.categories);
            setTotal(res.data.total); // si aplica
            setCurrentPage(1); // para resetear a la página 1 cuando buscas
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })

        // Limpiamos timeout anterior si existía
        if (searchTimeout) clearTimeout(searchTimeout);
        
        // Creamos nuevo timeout para hacer la búsqueda después de 500ms de inactividad
        const timeout = setTimeout(() => {
            if (value.trim() === "") {
                getCategories(1); // Si la búsqueda está vacía, cargamos la página 1 normal
            } else {
                getCategoriesBySearch(value);
            }
        }, 500);

        setSearchTimeout(timeout);
    }
    
    const handleBlur = (e) => {
        handleChange(e);
    }

    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>PROPIETARIOS</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div>
                                            <div className="col-md-2">
                                                <Link href='/owner/new_owner'>
                                                    <button className="btn_ btn_secondary_ w-100">Nuevo propietario</button>
                                                </Link>
                                            </div>
                                        <div className="divider_" style={{marginTop:5}}></div></div>
                                    </div>
                                    <div className="row" style={{marginTop:10}}>
                                        <div className="col-md-3">
                                            <div>
                                                <label className="label_">Buscar:</label>
                                                <div className="content_search_">
                                                    <input 
                                                        placeholder="Ingresar documento" 
                                                        className="input_ w-100"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="description"
                                                        value={form.description}
                                                    />
                                                    <button onClick={()=>{getCategoriesBySearch(form.description)}}>
                                                        <Search 
                                                            color={"#fff"}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:20}}>
                                        <div className="col-sm-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Nombre</th>
                                                            <th scope="col">DNI</th>
                                                            <th scope="col">Dirección</th>
                                                            <th scope="col">Teléfono</th>
                                                            <th scope="col">Fecha de registro</th>
                                                            <th scope="col">ACCIÓN</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {   
                                                            Array.isArray(owners) &&
                                                            owners.map((c, index) => (
                                                                <tr key={c._id}>
                                                                    <td>{c.name}</td>
                                                                    <td>{c.dni}</td>
                                                                    <td>{c.address}</td>
                                                                    <td>{c.cellphone}</td>
                                                                    <td className="text-center">{new Date(c.registrationDate).toLocaleDateString('es-ES')}</td>
                                                                    <td className="text-center">
                                                                        <Link href={`/owner/pets/${c._id}`}>
                                                                            <span className="badge_ btn_primary_" style={{marginLeft: 5}}>
                                                                                <Settings
                                                                                    height="15px"
                                                                                    width="15px" 
                                                                                    color={"#fff"}
                                                                                />
                                                                            </span>
                                                                        </Link>
                                                                        <span className="badge_ btn_success_" style={{marginLeft: 5}}>
                                                                            <Pencil
                                                                                height="15px"
                                                                                width="15px" 
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
                                                                        <span className="badge_ btn_danger_" style={{marginLeft: 5}} onClick={()=>deleteCategory(c.description, c._id)}>
                                                                            <Trash 
                                                                                height="15px"
                                                                                width="15px"
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                            
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row" style={{marginTop: 10}}>
                                                <nav aria-label="Paginación">
                                                    <ul className="pagination pagination-sm">
                                                        {/* Botón Anterior */}
                                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                            <button
                                                                className="page-link"
                                                                onClick={() => handlePageChange(currentPage - 1)}
                                                                disabled={currentPage === 1}
                                                            >
                                                                &laquo;
                                                            </button>
                                                        </li>

                                                        {/* Botones de página */}
                                                        {Array.from({ length: totalPages }, (_, i) => (
                                                            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                                                <button
                                                                    className="page-link"
                                                                    onClick={() => handlePageChange(i + 1)}
                                                                >
                                                                {i + 1}
                                                                </button>
                                                            </li>
                                                        ))}

                                                        {/* Botón Siguiente */}
                                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                            <button
                                                                className="page-link"
                                                                onClick={() => handlePageChange(currentPage + 1)}
                                                                disabled={currentPage === totalPages}
                                                            >
                                                                &raquo;
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
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

export default Owners;