import React, { useState } from "react";
import "../estilos/UsuariosEstilo.css";

const Usuarios = (props) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  console.log(props)

  if (props.usuarioLogueado.usuario.tipoUsuario === 1)
  
    return (
      <>
        <h3>¡Hola, psicólogo!</h3>
        <p>Le deseamos un feliz día, {props.usuarioLogueado.usuario.nombre}</p>
        <div>
          {props.mensajes.map((mensaje) =>
            mensaje.usuario.tipoUsuario === 2 ? (
              <div className="contenedorMensaje">
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
          mensaje.usuario.id === props.usuarioLogueado.usuario.id? (
            <div>
              <h2>{mensaje.titulo}</h2>
              <p>{mensaje.contenido}</p>
              <button className="botonEditar">Editar</button>
            </div>
          ) : (
            ""
          )
        )}
        </div>
       
          <div className="contenedorMensaje">
            <h3>Escriba un mensaje</h3>
            <p className="aparte">
              Por favor, añada un mensaje si lo desea.
            </p>
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
                <button className="botonCrear">Crear Mensaje</button>
          </div>
      </>
    );
  }
};

export default Usuarios;
