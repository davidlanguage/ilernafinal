import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../estilos/IniciarOCrearSesionEstilo.css";
import  crearUsuarioYContrasenya from '../api/MetodosApi.js'

const CrearUsuario = (props) => {
  const [usuario, setUsuario] = useState('')
  const [contrasenya, setContrasenya] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [correo, setCorreo] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')
  
  const buscaValorRadioButton = (e) =>{
    setTipoUsuario(parseInt(e.target.value))
  }

  const navigate = useNavigate();

  const crearCuentaYUsuario = (event) => {

    event.preventDefault();

    const miCabecera = new Headers();
    miCabecera.append("Content-Type", "application/json");

    //En caso de que hubiera problemas con el tipo de usuario, a malas prefiero devolver 2 y que sea considerado un cliente
    const cuerpoJson = JSON.stringify({
      nombreUsuario: usuario,
      contrasenya: contrasenya,
      usuario: {
        nombre: nombre,
        apellidos: apellidos,
        correoElectronico: correo,
        tipoUsuario: tipoUsuario?tipoUsuario:2,
      },
    });

    const opcionesDePeticion = {
      method: "POST",
      headers: miCabecera,
      body: cuerpoJson,
      redirect: "follow",
    };
    //console.log("error", error)
    //console.log(response.text()
    fetch("http://localhost:9090/cuenta/crear", opcionesDePeticion)
    .then((response) => {
      console.log(response)
      navigate('exito')
    })
      .catch((error) => {<div>
        <p>Se ha producido un error :{error}.</p>
        <p>Por favor refresque la página.</p>
      </div>});
  };

  return (
    <div className="iniciarSesionContainer">
      <form className="formcrear" method="post" action="" onSubmit={crearCuentaYUsuario}>
        <h2>Información de la cuenta</h2>
        <div className="unidad">
          <label htmlFor="usuario">Entre el nombre de usuario</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={(e)=> setUsuario(e.target.value)}
            required
          ></input>
        </div>
        <div className="unidad">
          <label htmlFor="contrasenya">Entre la contraseña</label>
          <input 
          type="password" 
          name="contrasenya" 
          id="contrasenya"
          value={contrasenya}
          onChange={(e)=> setContrasenya(e.target.value)}
           required></input>
        </div>
        <h2>Información personal</h2>
        <div className="unidad">
          <label htmlFor="nombre">Entre el nombre de pila</label>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            required
          ></input>
        </div>
        <div className="unidad">
          <label htmlFor="apellidos">Entre sus apellidos</label>
          <input
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={(e)=> setApellidos(e.target.value)}
            id="apellidos"
            required
          ></input>
        </div>
        <div className="unidad">
          <label htmlFor="correo">Entre su correo electrónico</label>
          <input
            type="text"
            placeholder="correo@ejemlo.com"
            name="correo"
            id="correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}
            required
          ></input>
        </div>
        <h2>Tipo de Usuario</h2>
        <label className="check" for="psicologo">
          Psicólogo
        </label>
        <input
          className="check"
          type="radio"
          name="tipousuario"
          id="psicologo"
          value="1"
          checked={tipoUsuario == 1? true: false}
          onChange={buscaValorRadioButton}
        ></input>
        <label className="check" for="cliente">
          Cliente
        </label>
        <input
          className="check"
          type="radio"
          name="tipousuario"
          id="cliente"
          value="2"
          checked={tipoUsuario == 2? true: false}
          onChange={buscaValorRadioButton}
        ></input>
        <div className="unidad">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default CrearUsuario;
