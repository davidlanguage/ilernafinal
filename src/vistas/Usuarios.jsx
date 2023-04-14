import React, { useState, useEffect } from "react";
import "../estilos/UsuariosEstilo.css";

const Usuarios = (props) => {

  const escribirMensajeCliente = document.getElementsByClassName('contenedorMensaje');

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [tieneMensaje, setTieneMensaje] = useState(false);

  const mensajes = props.mensajes;

  console.log(escribirMensajeCliente)

  //Con esto verificamos que el usuario tenga o no mensajes. 
  //Si tiene mensajes, no podrá escribir un mensaje
  //Si no tiene mensajes, podrá escribir uno
  //al final [] actualiza la llamada para que después de escribir un mensaje
  //no pueda escribir más
  useEffect(() => {
    mensajes.map((mensaje) =>
      props.usuarioLogueado.usuario.id === mensaje.usuario.id
        ? setTieneMensaje(true)
        : setTieneMensaje(false)
    );
  }, [mensajes, props.usuarioLogueado.usuario.id, tieneMensaje]);

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

    const opcionesPeticion = {
      method: "POST",
      headers: cabecera,
      body: raw,
      redirect: "follow",
    };
    //Validación para que tanto título como contenido no estén vacíos a la hora de ser enviados
    if (titulo !== "" && contenido !== "") {
      fetch("http://localhost:9090/mensaje/crear", opcionesPeticion)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          setTitulo("");
          setContenido("");
          setTieneMensaje(true); 
          props.setRefrescaHooks();
 /*         alert(
            "Mensaje creado con éxito. Refresque la página para ver el contenido"
          ); */
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("No deje el contenido de su mensaje vacío");
    }
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

                    const raw = JSON.stringify({
                      id: mensaje.usuario.id,
                      nombre: mensaje.usuario.nombre,
                      apellidos: mensaje.usuario.apellidos,
                      activo: mensaje.usuario.activo,
                      correoElectronico: mensaje.usuario.correoElectronico,
                      tipoUsuario: mensaje.usuario.tipoUsuario,
                    });
                    console.log(raw);

                    const opcionesPeticion = {
                      method: "POST",
                      headers: cabecera,
                      body: raw,
                      redirect: "follow",
                    };

                    fetch("http://localhost:9090/activar", opcionesPeticion)
                      .then((response) => {
                        console.log(response.text());
                      })
                      .then((result) => {
                        console.log(result);
                        props.setRefrescaHooks();
                      })
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
        <h3>Bienvenido a un lugar en donde encontrará la ayuda que necesita</h3>
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
                <button
                  onClick={() => {
                    const cabecera = new Headers();
                    cabecera.append("Content-Type", "application/json");
                    cabecera.append('Access-Control-Allow-Origin','http://localhost:9090');

                    const opcionesPeticion = {
                      method: "DELETE",
                      mode: 'cors',
                      headers: cabecera,
                      redirect: "follow",
                    };

                    fetch(`http://localhost:9090/mensaje/borrar/${mensaje.usuario.id}`, opcionesPeticion)
                      .then((response) => {
                        console.log(response.text());
                      })
                      .then((result) => {
                        console.log(result);
                        props.setRefrescaHooks();
                      })
                      .catch((error) => console.log("error", error));
                  }}
                >
                  Borrar
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        {tieneMensaje ? (
          ""
        ) : (
          <div className="contenedorMensaje">
            <h3>Escriba un mensaje</h3>
            <p className="aparte">Por favor, añada un mensaje si lo desea.</p>
            <label for="titulo">Título: </label>
            <input
              type="text"
              placeholder="Contenido del título"
              name="titulo"
              id="titulo"
              title="No deje este campo vacío"
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
              title="No deje este campo vacío"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              required
            ></input>
            <button className="botonCrear" onClick={crearMensajeCliente}>
              Crear Mensaje
            </button>
          </div>
        )}
      </>
    );
  }
};

export default Usuarios;
