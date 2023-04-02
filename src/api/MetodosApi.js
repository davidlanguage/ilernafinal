const obtenTodosLosUsuarios = async (e) => {
	const datos = await fetch("http://localhost:9090/cuentas");
	const json = datos.json();
	return json;
};

const obtenTodosLosMensajesDeUsuario = async (e) =>{
	const datos = await fetch("http://localhost:9090/mensajes");
	const json = datos.json();
	return json;
}

export { obtenTodosLosUsuarios,obtenTodosLosMensajesDeUsuario};
