package com.example.demo.controlador;

import com.example.demo.excepcion.CuentaNoEncontradaException;
import com.example.demo.excepcion.MensajeNoEncontradoException;
import com.example.demo.excepcion.UsuarioNoEncontradoException;
import com.example.demo.entidad.Cuenta;
import com.example.demo.entidad.Mensaje;
import com.example.demo.entidad.Usuario;
import com.example.demo.servicio.CuentaServicio;
import com.example.demo.servicio.MensajeServicio;
import com.example.demo.servicio.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class Controlador {

    private final CuentaServicio cuentaServicio;
    private final UsuarioServicio usuarioServicio;
    private final MensajeServicio mensajeServicio;

    @Autowired
    public Controlador(CuentaServicio cuentaServicio, UsuarioServicio usuarioServicio, MensajeServicio mensajeServicio) {
        this.cuentaServicio = cuentaServicio;
        this.usuarioServicio = usuarioServicio;
        this.mensajeServicio = mensajeServicio;
    }

    @GetMapping("/test")
    public String test() {
        return "Si ves este mensaje, la conexión funciona";
    }

    @GetMapping("/mensajes")
    public List<Mensaje> getTodosLosMensajes() {
        return mensajeServicio.obtenerTodos();
    }

    @GetMapping("/cuentas")
    public List<Cuenta> getTodasLasCuentas() {
        return cuentaServicio.obtenerTodos();
    }

    @GetMapping("/mensajes/enviados/{id}")
    public List<Mensaje> getTodosLosMensajesPorIdDeUsuario(@PathVariable Integer id) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioServicio.obtener(id);
        return usuario.getMensajes();
    }

    @GetMapping("mensajes/recibidos/{id}")
    public List<Mensaje> getTodosLosMensajesPorIdDeDestinatario(@PathVariable Integer id) {
        return mensajeServicio.getTodosLosMensajesRecibidosPorIdUsuario(id);
    }

    @GetMapping("/psicologos")
    public List<Usuario> getTodosLosPsicologos() {
        return usuarioServicio.getTodosLosPsicologos();
    }

    @GetMapping("/usuariosclientes")
    public List<Usuario> getTodosLosUsuariosClientes() {
        return usuarioServicio.getTodosLosUsuariosClientes();
    }

    @GetMapping("/usuarios")
    public List<Usuario> getTodosLosUsuarios() {
        return usuarioServicio.obtenerTodos();
    }

    @GetMapping("/usuario/{id}")
    public Usuario getUsuarioPorId(@PathVariable Integer id) throws UsuarioNoEncontradoException {
        Usuario usuario = usuarioServicio.obtener(id);
        return usuario;
    }
    @GetMapping("/cuenta/{id}")
    public Cuenta getCuentaPorUsuarioId(@PathVariable Integer id) throws UsuarioNoEncontradoException {
        Cuenta cuentaPorUsuarioId = cuentaServicio.obtenerPorIdDeUsuario(id);
        return cuentaPorUsuarioId;
    }

    @PostMapping("/mensaje/crear")
    public ResponseEntity<Mensaje> creaMensaje(@RequestBody Mensaje mensaje) throws UsuarioNoEncontradoException {
        int usuarioId = mensaje.getUsuario().getId();
        int destinatarioId = mensaje.getUsuarioDestino().getId();
        Usuario envia = usuarioServicio.obtener(usuarioId);
        Usuario recibe = usuarioServicio.obtener(destinatarioId);
        mensaje.setUsuario(envia);
        mensaje.setUsuarioDestino(recibe);
        mensajeServicio.crear(mensaje);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*
     * Con este método puedo crear cuentas y usuarios,
     * ya que una cuenta siempre debe estar asociada a un usuario
     * */
    @PostMapping("/cuenta/crear")
    public ResponseEntity<Cuenta> creaCuenta(@RequestBody Cuenta cuenta) {
        usuarioServicio.crear(cuenta.getUsuario());
        return cuentaServicio.crear(cuenta)
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/usuario/crear")
    public ResponseEntity<Cuenta> creaUsuario(@RequestBody Usuario usuario) {
        return usuarioServicio.crear(usuario)
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/mensaje/modificar/{id}")
    public ResponseEntity<Mensaje> modificaMensaje(@RequestBody Mensaje mensaje, @PathVariable int id) {
        try{
            mensajeServicio.modificar(id, mensaje);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(MensajeNoEncontradoException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/cuenta/modificar/{id}")
    public ResponseEntity<Cuenta> modificaCuenta(@RequestBody Cuenta cuenta, @PathVariable int id) {
        try{
            cuentaServicio.modificar(id, cuenta);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(CuentaNoEncontradaException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/usuario/modificar/{id}")
    public ResponseEntity<Usuario> modificaUsuario(@RequestBody Usuario usuario, @PathVariable int id) {
        try{
            usuarioServicio.modificar(id, usuario);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(UsuarioNoEncontradoException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/verificarsesion")
    public Cuenta verificarSesion(@RequestBody Cuenta cuenta){
        boolean nombreUsuarioCorrecto = cuentaServicio.verificaNombreUsuario(cuenta);
        if(nombreUsuarioCorrecto){
            boolean exito = cuentaServicio.verificaContrasenyaCorrecta(cuenta);
            if (exito){
                return cuentaServicio.obtenerPorContrasenya(cuenta.getContrasenya());
            }
        }
        return null;
    }
}