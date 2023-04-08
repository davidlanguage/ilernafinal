import React, { useState } from "react";
import "../estilos/UsuariosEstilo.css";

const Usuarios = (props) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  console.log(props);

  console.log(props.usuarioLogueado);

  const crearMensajeCliente = (event) => {
    event.preventDefault();

    const cabecera = new Headers();
    cabecera.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      titulo: titulo,
      contenido: contenido,
      usuario: {
        id: props.usuarioLogueado.usuario.id,
        nombre: props.usuarioLogueado.usuario.nombre,
        apellidos: props.usuarioLogueado.usuario.apellidos,
        correoElectronico: props.usuarioLogueado.usuario.correoElectronico,
        tipoUsuario: props.usuarioLogueado.usuario.tipoUsuario,
      },
      usuarioDestino: {
        id: props.usuarioLogueado.usuario.id,
        nombre: props.usuarioLogueado.usuario.nombre,
        apellidos: props.usuarioLogueado.usuario.apellidos,
        correoElectronico: props.usuarioLogueado.usuario.correoElectronico,
        tipoUsuario: props.usuarioLogueado.usuario.tipoUsuario,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: cabecera,
      body: raw,
      redirect: "follow",
    };
    if (titulo !== "" && contenido !== "") {
      fetch("http://localhost:9090/mensaje/crear", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          setTitulo("");
          setContenido("");
          alert(
            "Mensaje creado con éxito. Refresque la página para ver el contenido"
          );
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("No deje el contenido vacío");
    }
  };

  const activar = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: 27,
      nombre: "asd",
      apellidos: "asd",
      activo: 1,
      correoElectronico: "asd",
      tipoUsuario: 1,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:9090/activar", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  if (props.usuarioLogueado.usuario.tipoUsuario === 1)
    return (
      <>
        <h3>¡Hola, psicólogo!</h3>
        <p>Le deseamos un feliz día, {props.usuarioLogueado.usuario.nombre}</p>
        <div>
          {props.mensajes.map((mensaje) =>
            mensaje.usuario.tipoUsuario === 2 &&
            mensaje.usuario.activo === 1 ? (
              <div className="contenedorMensaje">
                <h2>{mensaje.titulo}</h2>
                <p>{mensaje.contenido}</p>
                <p>
                  Publicado por: {mensaje.usuario.nombre}{" "}
                  {mensaje.usuario.apellidos}
                </p>
                <p>Correo electrónico: {mensaje.usuario.correoElectronico}</p>
                <button
                  onClick={() => {
                    const cabecera = new Headers();
                    cabecera.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                      id: mensaje.usuario.id,
                      nombre: mensaje.usuario.nombre,
                      apellidos: mensaje.usuario.apellidos,
                      activo: mensaje.usuario.activo,
                      correoElectronico: mensaje.usuario.correoElectronico, 
                      tipoUsuario: mensaje.usuario.tipoUsuario,
                    });

                    const opcionesPeticion = {
                      method: "POST",
                      headers: cabecera,
                      body: raw,
                      redirect: "follow",
                    };

                    fetch("http://localhost:9090/activar", opcionesPeticion)
                      .then((response) => response.text())
                      .then((result) => console.log(result))
                      .catch((error) => console.log("error", error));
                  }}
                >
                  Asignar a mí
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </>
    );
  else {
    return (
      <>
        <h3>
          Bienvenido al un lugar en donde encontrará la ayuda que necesita
        </h3>
        <p>Le deseamos un feliz día, {props.usuarioLogueado.usuario.nombre}</p>
        <div>
          {props.mensajes.map((mensaje) =>
            mensaje.usuarioDestino.id === props.usuarioLogueado.usuario.id &&
            props.usuarioLogueado.usuario.id ? (
              <div>
                <h2>{mensaje.titulo}</h2>
                <p>{mensaje.contenido}</p>
                <p>
                  Publicado por: {mensaje.usuario.nombre}{" "}
                  {mensaje.usuario.apellidos}
                </p>
                <p>Correo electrónico: {mensaje.usuario.correoElectronico}</p>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        <div className="contenedorMensaje">
          <h3>Escriba un mensaje</h3>
          <p className="aparte">Por favor, añada un mensaje si lo desea.</p>
          <label for="titulo">Título: </label>
          <input
            type="text"
            placeholder="Contenido del título"
            name="titulo"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          ></input>
          <label for="contenido">Contenido:</label>
          <input
            type="text"
            placeholder="Contenido del mensaje"
            name="contenido"
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          ></input>
          <button className="botonCrear" onClick={crearMensajeCliente}>
            Crear Mensaje
          </button>
        </div>
      </>
    );
  }
};

/* Posible futura implementación de un botón "editar"
Hoy en día no contemplado debido a la naturaleza de la aplicación
{mensaje.usuario.id === props.usuarioLogueado.usuario.id ? (
                  <button className="botonEditar">Editar</button>
                ) : (
                  ""
                )}
*/

export default Usuarios;
