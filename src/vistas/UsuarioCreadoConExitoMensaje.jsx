import React from 'react'
import { Link } from "react-router-dom";
import "../estilos/VistaNoExistenteEstilo.css";


function UsuarioCreadoConExitoMensaje() {
  return (
    <div>
        <div className="inexistente">
      <Link className="botonatras" to='/'>Atrás 🔙</Link>
      <p className="inexistente">¡Muchas felicidades! 🥳</p>
      <p className="inexistente"> Su usuario ya ha sido creado! Siétanse libre de acceder cuando lo desee a nuestra aplicación.</p>
    </div>
    </div>
  )
}

export default UsuarioCreadoConExitoMensaje