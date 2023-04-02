package com.example.demo.servicio;

import com.example.demo.excepcion.CuentaNoEncontradaException;
import com.example.demo.excepcion.MensajeNoEncontradoException;
import com.example.demo.excepcion.UsuarioNoEncontradoException;
import com.example.demo.entidad.Mensaje;
import com.example.demo.entidad.Usuario;
import com.example.demo.repositorio.CuentaRepository;
import com.example.demo.repositorio.MensajeRepository;
import com.example.demo.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class MensajeServicio implements MetodosBasicosServicio<Mensaje> {

    private final CuentaRepository cuentaRepositorio;
    private final UsuarioRepository usuarioRepositorio;
    private final MensajeRepository mensajeRepositorio;

    @Autowired
    public MensajeServicio(MensajeRepository mensajeRepositorio, UsuarioRepository usuarioRepositorio, CuentaRepository cuentaRepositorio){
        this.mensajeRepositorio = mensajeRepositorio;
        this.cuentaRepositorio = cuentaRepositorio;
        this.usuarioRepositorio = usuarioRepositorio;
    }

    public Mensaje obtener(int id) throws MensajeNoEncontradoException {
        Mensaje mensaje = mensajeRepositorio.findById(id).orElseThrow(()-> new MensajeNoEncontradoException(id));
        return mensaje;
    }
    public List<Mensaje> obtenerTodos(){
        return (List<Mensaje>) mensajeRepositorio.findAll();
    }

    public void borrar(int mensajeId) throws CuentaNoEncontradaException {
        Mensaje mensaje = mensajeRepositorio.findById(mensajeId).orElseThrow(()-> new CuentaNoEncontradaException(mensajeId));
        mensajeRepositorio.delete(mensaje);
    }

    public List<Mensaje> getTodosLosMensajesDeUnUsuarioPorId(Integer usuarioId) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioRepositorio.findById(usuarioId).orElseThrow(()-> new UsuarioNoEncontradoException(usuarioId));
        return (List<Mensaje>) mensajeRepositorio.findAllById(Collections.singleton(usuario.getId()));
    }
    public List<Mensaje> getTodosLosMensajesRecibidosPorIdUsuario(Integer usuarioDestinatarioId){
        List<Mensaje> todosLosMensajes = (List<Mensaje>) mensajeRepositorio.findAll();
        List<Mensaje> listaMensajesPorIdDestinatario = new ArrayList<>();
        todosLosMensajes.stream().forEach(e ->{
            if (e.getUsuarioDestino().getId()==usuarioDestinatarioId){
                listaMensajesPorIdDestinatario.add(e);
            }
        });
        return listaMensajesPorIdDestinatario;
    }
    @Override
    public void modificar(int mensajeId, Mensaje nuevoMensaje) throws MensajeNoEncontradoException {
        Mensaje mensaje = mensajeRepositorio.findById(mensajeId).orElseThrow(() -> new MensajeNoEncontradoException(mensajeId));
        if (nuevoMensaje.getTitulo()!=null){
            mensaje.setTitulo(nuevoMensaje.getTitulo());
        }
        if (nuevoMensaje.getContenido()!=null) {
            mensaje.setContenido(nuevoMensaje.getContenido());
        }
        mensajeRepositorio.save(mensaje);
    }
    public boolean crear(Mensaje mensaje){
        mensajeRepositorio.save(mensaje);
        return true;
    }

}

