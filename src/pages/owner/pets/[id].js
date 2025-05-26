import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Container from "../../components/Container";

import Perfil from '../../assets/perfil_empty.png'

//Import CSS
import styles from '../../../styles/Profile.module.css';
import { EyeOff, Eye, Search, SearchCircle, Pencil, Trash } from 'react-ionicons';
import Link from "next/link";

//Datos de formulario
const initForm = {
    ownerId: '',
    name: '',
    sex: '',
    color: '',
    specie: '',
    weight: '',
    sterilized: '',
    race: '',
    birthday: '',
    age: '',
    temper: ''
}

const initPets = {
    success: '',
    stocks: []
}

const NewPet = () => {
    const [form, setForm] = useState(initForm);
    const [pets, setPets] = useState(initPets)
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); //Inicializamos página actual
    const pageSize = 10; //Para calcular el número inicial de "from"

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => { //Obtenemos el id de la query que enviamos en la ruta dinámica
        if (id) {
            setForm(prev => ({
                ...prev,
                ownerId: id
            }));
        }
        getPets(id);
    }, [id]);

    /**
     * Manejadores del formulario de ingreso de personal nuevo
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
      }
    
    const handleBlur = (e) => {
        handleChange(e);
    }

    /**
     * Manejador para enviar metodo POST a RESTApi
     */
    
    async function petRegistration() {
        try {
            const confirmaRegistro = window.confirm('¿Desea registrar categoría?');
            if(confirmaRegistro){
                console.log(form)
                axios.post('/api/owner/pet', {
                    ownerId: id,
                    name: form.name,
                    sex: form.sex,
                    color: form.color,
                    specie: form.specie,
                    weight: form.weight,
                    sterilized: form.sterilized,
                    race: form.race,
                    birthday: form.birthday,
                    age: 1,
                    temper: form.temper
                })
                .then(function (response) {
                    alert(response.data.message)
                    setForm(initForm)
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
    async function getPets(page=1){
        try {
            const from = (page-1) * pageSize;
            const res = await fetch(`/api/owner/pets?from=${from}&id=${id}`);
            const data = await res.json();
            setPets(data.pets);
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
                            <h6 style={{marginTop: 15, fontWeight: 600}}>AGREGAR MASCOTA</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card_">
                                <div className="card_body_">
                                    {/*<div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Propietario:</label>
                                                <input 
                                                    placeholder="Ingresar lote" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="description"
                                                    value={form.description}
                                                />                        
                                            </div>
                                        </div>
                                    </div>*/}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Nombre de la mascota:</label>
                                                <input 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="name"
                                                    value={form.name}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Sexo:</label>
                                                <select 
                                                    name="sex" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.sex}
                                                >
                                                    <option value="">Seleccionar</option>
                                                    <option value="MACHO">MACHO</option>
                                                    <option value="HEMBRA">HEMBRA</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Color:</label>
                                                <input 
                                                    placeholder="Ingresar color" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="color"
                                                    value={form.color}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Especie:</label>
                                                <select 
                                                    name="specie" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.specie}
                                                >
                                                    <option value="">Seleccionar</option>
                                                    <option value="CANINO">CANINO</option>
                                                    <option value="FELINO">FELINO</option>
                                                    <option value="OTROS">OTROS</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Peso:</label>
                                                <input
                                                    type="number"
                                                    placeholder="Ingresar peso" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="weight"
                                                    value={form.weight}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Esterilizado:</label>
                                                <select 
                                                    name="sterilized" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={form.sterilized}
                                                >   
                                                    <option value="">Seleccionar</option>
                                                    <option value="false">NO</option>
                                                    <option value="true">SI</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Raza:</label>
                                                <input 
                                                    placeholder="Ingresar lote" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="race"
                                                    value={form.race}
                                                />                        
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label className="label_">Fecha de nacimiento:</label>
                                                <input
                                                    type="date" 
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="birthday"
                                                    value={form.birthday}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="label_">Temperamento:</label>
                                                <textarea
                                                    placeholder="Ingresar nombre" 
                                                    className="input_ w-100"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="temper"
                                                    value={form.temper}
                                                />                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: 10}}>
                                        <div className="col-md-6">
                                            <div>
                                                <button className="btn_ btn_secondary_ w-100" onClick={petRegistration}>Registrar mascota</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <Link href='/owner/owners/'>
                                                    <button className="btn_ btn_danger_ w-100">Ver propietarios</button>
                                                </Link>
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
                                                            <th scope="col">Nombre</th>
                                                            <th scope="col">Sexo</th>
                                                            <th scope="col">Color</th>
                                                            <th scope="col">Especie</th>
                                                            <th scope="col">Esterilizado</th>
                                                            <th scope="col">Raza</th>
                                                            <th scope="col">Edad</th>
                                                            <th scope="col">Temperamento</th>
                                                            <th scope="col">Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {   
                                                            Array.isArray(pets) &&
                                                            pets.map((c, index) => (
                                                                <tr key={c._id}>
                                                                    <td>{c.name}</td>
                                                                    <td>{c.sex}</td>
                                                                    <td>{c.color}</td>
                                                                    <td>{c.specie}</td>
                                                                    <td>{c.sterilized}</td>
                                                                    <td>{c.race}</td>
                                                                    <td>{c.age}</td>
                                                                    <td>{c.temper}</td>
                                                                    {/*<td className="text-center">{new Date(c.registrationDate).toLocaleDateString('es-ES')}</td>*/}
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

export default NewPet;