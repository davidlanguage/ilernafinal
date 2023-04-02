package com.example.demo.servicio;

import com.example.demo.excepcion.UsuarioNoEncontradoException;
import com.example.demo.entidad.Cuenta;
import com.example.demo.entidad.Usuario;
import com.example.demo.repositorio.CuentaRepository;
import com.example.demo.repositorio.MensajeRepository;
import com.example.demo.repositorio.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioServicio implements MetodosBasicosServicio<Usuario> {
    private final CuentaRepository cuentaRepositorio;
    private final UsuarioRepository usuarioRepositorio;
    private final MensajeRepository mensajeRepositorio;
    public UsuarioServicio(CuentaRepository cuentaRepositorio, UsuarioRepository usuarioRepositorio, MensajeRepository mensajeRepositorio){
        this.usuarioRepositorio = usuarioRepositorio;
        this.cuentaRepositorio = cuentaRepositorio;
        this.mensajeRepositorio = mensajeRepositorio;
    }

    public List<Usuario> obtenerTodos(){
        return (List<Usuario>) usuarioRepositorio.findAll();
    }
    public List<Usuario> getTodosLosPsicologos(){
        List<Usuario> usuarios = obtenerTodos();

        List<Usuario> psicologos = new ArrayList<>();
        usuarios.forEach(e -> {
            if (e.getTipoUsuario()==1){
                psicologos.add(e);
            }
        });
        return psicologos;
    }
    public List<Usuario> getTodosLosUsuariosClientes(){
        List<Usuario> usuarios = obtenerTodos();

        List<Usuario> usuariosComunes = new ArrayList<>();
        usuarios.forEach(e -> {
            if (e.getTipoUsuario()==2){
                usuariosComunes.add(e);
            }
        });
        return usuariosComunes;
    }

    public Usuario obtener(int id) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioRepositorio.findById(id).orElseThrow(()->new UsuarioNoEncontradoException(id));
        return usuario;
    }

    public boolean crear(Usuario usuario){
        System.out.println();
        return usuarioRepositorio.save(usuario)!=null;
    }
    public boolean crearUsuarioYCuenta(Usuario usuario, Cuenta cuenta){
        return usuarioRepositorio.save(usuario)!=null;
    }

    public void borrar(int usuarioId) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioRepositorio.findById(usuarioId).orElseThrow(()-> new UsuarioNoEncontradoException(usuarioId));
        usuarioRepositorio.delete(usuario);
    }

    public void modificar(int usuarioId,
                             Usuario usuarioModificado) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioRepositorio.findById(usuarioId).orElseThrow(() -> new UsuarioNoEncontradoException(usuarioId));
        if (usuarioModificado.getNombre()!=null){
            usuario.setNombre(usuarioModificado.getNombre());
        }
        if (usuarioModificado.getApellidos()!=null){
            usuario.setApellidos(usuarioModificado.getApellidos());
        }
        if (usuarioModificado.getCorreoElectronico()!=null){
            usuario.setCorreoElectronico(usuarioModificado.getCorreoElectronico());
        }
        usuarioRepositorio.save(usuario);
    }


}
