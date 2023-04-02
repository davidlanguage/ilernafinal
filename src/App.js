//Aquí mediante el uso de la librería react-router-dom vamos a pasar las rutas
import {Routes, Route, Navigate} from 'react-router-dom';
import Usuario from './vistas/Usuario'
import TestMensaje from './vistas/TestMensaje'
import { PaginaPrincipal } from './vistas/PaginaPrincipal';
import VistaNoExistente from './vistas/VistaNoExistente';
import MiFooter from './estaticos/MiFooter';
import Navegacion from './estaticos/Navegacion';
import CrearUsuario from './vistas/CrearUsuario';
import IniciarSesion from './vistas/IniciarSesion';
import Usuarios from './vistas/Usuarios';
import UsuarioCreadoConExitoMensaje from './vistas/UsuarioCreadoConExitoMensaje';
import SobreNosotros from './vistas/SobreNosotros';
import { useState, useEffect,useReducer } from 'react';
import { obtenTodosLosMensajesDeUsuario, obtenTodosLosUsuarios} from './api/MetodosApi';

function App() {

  const [mensajes, setMensajes] = useState();

  const [usuarios, setUsuarios] = useState();

  const [usuarioSesion, setusuarioSesion] = useState();

  //Esta es la solución aconsejada por la documentación oficial de React para "forzar" y refrescar un useEffect
  const [refrescaHooks, setRefrescaHooks] = useReducer(a => a+1, 0);

  const comprobarConexion = <p>{usuarioSesion&&usuarioSesion.usuario.tipoUsuario?'hola':'adiós'}</p>;

	useEffect(() => {
		obtenTodosLosUsuarios().then(response => {
			setUsuarios(() => {
				return response;
			});
		});
	},[refrescaHooks]);

  useEffect(() => {
		obtenTodosLosMensajesDeUsuario().then(response => {
			setMensajes(() => {
				return response;
			});
		});
	},[refrescaHooks]);

  console.log(usuarios)
  console.log(mensajes)

  return (
    
    <div className="contenedor">
      <Navegacion salirDeLaSesion = {setusuarioSesion} 
      usuarioLogueado = {usuarioSesion} 
      setRefrescaHooks = {setRefrescaHooks}>
      </Navegacion>
        <Routes>
          <Route path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
          <Route path="/sobrenosotros" element={<SobreNosotros></SobreNosotros>}></Route>
          <Route path="/crearusuario/exito" element={<UsuarioCreadoConExitoMensaje></UsuarioCreadoConExitoMensaje>}></Route>
          <Route path="/crearusuario" element={<CrearUsuario listaDeUsuarios = {usuarios}></CrearUsuario>}></Route>
          <Route path="/iniciarsesion" element={<IniciarSesion 
          listaDeUsuarios = {usuarios} iniciarSesion = {setusuarioSesion} 
          ></IniciarSesion>}></Route>
          <Route path='/test' element={<TestMensaje usuarioLogueado = {usuarioSesion}></TestMensaje>}></Route>
          <Route path='/mensajesdeusuarios' element={<Usuarios listaDeUsuarios = {usuarios} mensajes = {mensajes} usuarioLogueado = {usuarioSesion}></Usuarios>}></Route>
          <Route path='/usuario/:id' element={<Usuario listaDeUsuarios = {usuarios}></Usuario>}></Route>
          <Route path='*' element={<VistaNoExistente></VistaNoExistente>}></Route>
        </Routes>
        {comprobarConexion}
      <MiFooter></MiFooter>
    </div>
  );
}

export default App;
