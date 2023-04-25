import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        activo: 1
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
      <form method="post" action="" onSubmit={crearCuentaYUsuario}>
        <h2 className="display-6">Información de la cuenta</h2>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
          className="form-control input-xl"
            type="text"
            placeholder="Nombre de usuario"
            name="usuario"
            id="usuario"
            pattern="\w{6,}"
            title="Mínimo 6 caracteres o números"
            value={usuario}
            onChange={(e)=> setUsuario(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="contrasenya">Contraseña</label>
          <input 
          className="form-control"
          type="password" 
          name="contrasenya" 
          id="contrasenya"
          value={contrasenya}
          placeholder="Contraseña mínimo de 6 caracteres"
          pattern="\w{6,}"
          title="Mínimo 6 caracteres o números"
          onChange={(e)=> setContrasenya(e.target.value)}
           required></input>
        </div>
        <h2 className="display-6">Información personal</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
          className="form-control"
            type="text"
            placeholder="Nombre"
            name="nombre"
            id="nombre"
            value={nombre}
            pattern="\w{3,}"
            title="Mínimo 3 caracteres o números"
            onChange={(e)=> setNombre(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
          className="form-control"
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={(e)=> setApellidos(e.target.value)}
            pattern="\w{3,}"
            title="Mínimo 3 caracteres o números"
            id="apellidos"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
          className="form-control"
            type="text"
            placeholder="correo@ejemplo.com"
            name="correo"
            id="correo"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$"
            title="Introduzca un correo electrónico válido"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}
            required
          ></input>
        </div>
        <h2 className="display-6">Tipo de Usuario</h2>
        <div className="form-group">
        <label className="check" for="psicologo">
          Psicólogo
        </label>
        <input
          className="check"
          type="radio"
          name="tipousuario"
          id="psicologo"
          value="1"
          checked={tipoUsuario === 1? true: false}
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
          checked={tipoUsuario === 2? true: false}
          onChange={buscaValorRadioButton}
        ></input>
        </div>
        
        <div className="unidad">
          <button type="submit" className="btn btn-primary">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default CrearUsuario;
