import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Container from "../../components/Container";

import Perfil from '../../assets/perfil_empty.png'

//Import CSS
import { EyeOff, Eye, Search, SearchCircle, Pencil, Trash } from 'react-ionicons';
import Link from "next/link";

//Datos de formulario
const initForm = {
    productId: '',
    nameLote: '',
    typeOfPackage: '',
    typeOfConcentration: '',
    stock: '',
    expirationDate: '',
    purchagePrice: '',
    percentage: '',
    salePrice: 0
}

const initStocks = {
    success: '',
    stocks: []
}

const Stock = () => {
    const [form, setForm] = useState(initForm);
    const [stocks, setStocks] = useState(initStocks)
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); //Inicializamos página actual
    const pageSize = 10; //Para calcular el número inicial de "from"

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => { //Obtenemos el id de la query que enviamos en la ruta dinámica
        if (id) {
            setForm(prev => ({
                ...prev,
                productId: id
            }));
        }
        getStocks(id);
    }, [id]);

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: name === 'productCategoryId' ? value : value.toUpperCase() // Convertir a mayúsculas aquí
        })
        // AUMENTO: cálculo automático de salePrice
        if (name === 'purchagePrice' || name === 'percentage' || name === 'stock') {
            const price = parseFloat(name === 'purchagePrice' ? value : form.purchagePrice);
            const percent = parseFloat(name === 'percentage' ? value : form.percentage);
            const stock = parseFloat(name === 'stock' ? value : form.stock);

            if (!isNaN(price) && !isNaN(percent)) {
                const salePrice = ((price + (price * percent / 100))/stock).toFixed(2);
                setForm(prevForm => ({
                    ...prevForm,
                    salePrice
                }));
            }
        }
    }
    
    const handleBlur = (e) => {
        handleChange(e);
    }

    //Método para cambiar de página
    const totalPages = Math.ceil(total/pageSize);
    function handlePageChange(page){
        if (page < 1 || page > totalPages) return;
        getStocks(page);
    }

    /**
     * Manejador para enviar metodo POST a RESTApi
     */
    async function stockRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                axios.post('/api/product/stock', {
                    productId: form.productId,
                    nameLote: form.nameLote,
                    typeOfPackage: form.typeOfPackage,
                    typeOfConcentration: form.typeOfConcentration,
                    stock: form.stock,
                    expirationDate: form.expirationDate,
                    purchagePrice: form.purchagePrice,
                    percentage: form.percentage,
                    salePrice: form.salePrice
                })
                .then(function (response) {
                    alert(response.data.message)
                    setForm(initForm)
                    getStocks(id);
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                });
            }else{
                setForm(initForm)
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Método para mostrar stocks de 10 en 10
    async function getStocks(page=1){
        try {
            const from = (page-1) * pageSize;
            const res = await fetch(`/api/product/stocks?from=${from}&id=${id}`);
            const data = await res.json();
            setStocks(data.stocks);
            setTotal(data.total)
            setCurrentPage(page)
        } catch (error) {
            console.error('Error al cargar categorías:', error);  
        }
    }

    return(
        <>
            <Container>
                <div className="container">
                    <div className='row'>
                        <div>
                            <h6 style={{marginTop: 15, fontWeight: 600}}>STOCK DE PRODUCTO</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Lote:</label>
                                                <input 
                                                    placeholder="Ingresar lote" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="nameLote"
                                                    value={form.nameLote}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Tipo de paquete:</label>
                                                <select 
                                                    name="typeOfPackage" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.typeOfPackage}
                                                >
                                                    <option value="">Seleccionar</option>
                                                    <option value="CAJA">CAJA</option>
                                                    <option value="BOTELLA">BOTELLA</option>
                                                </select>                        
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Tipo de concentración:</label>
                                                <select 
                                                    name="typeOfConcentration" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.typeOfConcentration}
                                                >
                                                    <option value="">Seleccionar</option>
                                                    <option value="ML">ML</option>
                                                    <option value="MG">MG</option>
                                                    <option value="SERV">SERV</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Stock:</label>
                                                <input
                                                    type="number"
                                                    placeholder="Ingresar stock" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="stock"
                                                    value={form.stock}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Fecha de expiración:</label>
                                                <input
                                                    type="date" 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="expirationDate"
                                                    value={form.expirationDate}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Precio de compra:</label>
                                                <input 
                                                    placeholder="Ingresar precio de compra" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="purchagePrice"
                                                    value={form.purchagePrice}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Porcentaje de interés:</label>
                                                <input

                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="percentage"
                                                    value={form.percentage}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label className="label_">Precio de venta:</label>
                                                <input
                                                    disabled 
                                                    placeholder="30" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="salePrice"
                                                    value={form.salePrice}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{marginTop: 20}}>
                                                <button className="btn_ btn_secondary_ w-100" onClick={stockRegistration}>Registrar lote</button>
                                            </div>                      
                                        </div>
                                    </div>
                                    <div className="divider_"></div>
                                    <div className="row" style={{marginTop:20}}>
                                        <div className="col-sm-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Lote</th>
                                                            <th scope='col'>Tipo de paquete</th>
                                                            <th scope='col'>Concentración</th>
                                                            <th scope="col">Stock</th>
                                                            <th scope="col">Fecha de expiración</th>
                                                            <th scope="col">Precio de compra</th>
                                                            <th scope='col'>Porcentaje interés</th>
                                                            <th scope="col">Precio venta</th>
                                                            <th scope="col">Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {   
                                                            Array.isArray(stocks) &&
                                                            stocks.map((c, index) => (
                                                                <tr key={index}>
                                                                    <td>{c.nameLote}</td>
                                                                    <td>{c.typeOfPackage}</td>
                                                                    <td>{c.typeOfConcentration}</td>
                                                                    <td>{c.stock}</td>
                                                                    <td>{new Date(c.expirationDate).toLocaleDateString('es-ES')}</td>
                                                                    <td>{c.purchagePrice}</td>
                                                                    <td>{c.percentage} %</td>
                                                                    <td>{c.salePrice}</td>
                                                                    <td className="text-center">
                                                                        <span className="badge_ btn_primary_" style={{marginLeft: 5}}>
                                                                            <Eye
                                                                                height="15px"
                                                                                width="15px" 
                                                                                color={"#fff"}
                                                                            />
                                                                        </span>
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
                                            {/*<div className="row" style={{marginTop: 10}}>
                                                <div className="d-flex">
                                                    <nav aria-label="Paginación">
                                                        <ul className="pagination pagination-sm">
                                                            {/* Botón Anterior ''
                                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                                <button
                                                                    className="page-link"
                                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                                    disabled={currentPage === 1}
                                                                >
                                                                    &laquo;
                                                                </button>
                                                            </li>

                                                            {/* Botones de página 
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

                                                            {/* Botón Siguiente
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
                                                    {
                                                        <span style={{fontWeight: 600, fontSize: 12, marginTop: 6, marginLeft: 10}}>{`Total: ${total}`}</span>
                                                    }
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: 10}}>
                                        <div className="col-md-12">
                                            <div>
                                                <Link href='/product/products'>
                                                    <button className="btn_ btn_danger_ w-100">Ver productos</button>
                                                </Link>
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

export default Stock;