package com.example.demo.servicio;

import com.example.demo.excepcion.CuentaNoEncontradaException;
import com.example.demo.excepcion.UsuarioNoEncontradoException;
import com.example.demo.entidad.Cuenta;
import com.example.demo.entidad.Usuario;
import com.example.demo.repositorio.CuentaRepository;
import com.example.demo.repositorio.MensajeRepository;
import com.example.demo.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CuentaServicio implements MetodosBasicosServicio<Cuenta>{
    private final CuentaRepository cuentaRepositorio;
    private final UsuarioRepository usuarioRepositorio;

    private final MensajeRepository mensajeRepositorio;

    @Autowired
    public CuentaServicio(CuentaRepository cuentaRepositorio, UsuarioRepository usuarioRepositorio, MensajeRepository mensajeRepositorio) {
        this.cuentaRepositorio = cuentaRepositorio;
        this.usuarioRepositorio = usuarioRepositorio;
        this.mensajeRepositorio = mensajeRepositorio;
    }

    public List<Cuenta> obtenerTodos() {
        return (List<Cuenta>) cuentaRepositorio.findAll();
    }
    
    public Cuenta obtenerPorIdDeUsuario(int idUsuario) throws UsuarioNoEncontradoException {
        Usuario usuarioCuenta = usuarioRepositorio.findById(idUsuario).orElseThrow(()-> new UsuarioNoEncontradoException(idUsuario));
        Cuenta cuentaDeUsuario = cuentaRepositorio.findByUsuarioId(usuarioCuenta.getId());
        return cuentaDeUsuario;
    }
    public Cuenta obtener(int id) throws CuentaNoEncontradaException {
        return cuentaRepositorio.findById(id).orElseThrow(()-> new CuentaNoEncontradaException(id));
    }

    public void borrar(int cuentaId) throws CuentaNoEncontradaException {
        Cuenta cuenta = cuentaRepositorio.findById(cuentaId).orElseThrow(() -> new CuentaNoEncontradaException(cuentaId));
        cuentaRepositorio.delete(cuenta);
    }

    public void modificar(int cuentaId, Cuenta cuentaModificada) throws CuentaNoEncontradaException {
        Cuenta cuenta = cuentaRepositorio.findById(cuentaId).orElseThrow(() -> new CuentaNoEncontradaException(cuentaId));
        if (cuentaModificada.getNombreUsuario()!=null){
            cuenta.setNombreUsuario(cuentaModificada.getNombreUsuario());
        }
        if (cuentaModificada.getContrasenya()!=null){
            cuenta.setContrasenya(cuentaModificada.getContrasenya());
        }
        cuentaRepositorio.save(cuenta);
    }
    //Al objeto cuenta se le pasa el id de usuario en el front
    //Primera se crea el usuario, y después se pasa el id de usuario a la cuenta para que así pueda ser creada
    public boolean crear(Cuenta cuenta){
        return cuentaRepositorio.save(cuenta) != null;
    }

    public boolean verificaNombreUsuario(Cuenta cuenta) {
        Cuenta cuentaVerificada = obtenerTodos().stream().filter(e ->
            e.getNombreUsuario().equals(cuenta.getNombreUsuario())).findFirst().orElse(null);

        if (cuentaVerificada==null){
            return false;
        }
        return true;
    }

    public boolean verificaContrasenyaCorrecta(Cuenta cuenta) {
        Cuenta cuentaVerificada = obtenerTodos().stream().filter(e ->
                e.getContrasenya().equals(cuenta.getContrasenya())).findFirst().orElse(null);

        if (cuentaVerificada==null){
            return false;
        }
        return true;
    }

    public Cuenta obtenerPorContrasenya(String contrasenya) {
        return obtenerTodos().stream().filter(e ->
                e.getContrasenya().equals(contrasenya)).findFirst().orElse(null);
    }
}