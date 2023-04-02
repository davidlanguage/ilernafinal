package com.example.demo.entidad;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Table(name = "usuario")
@Entity
@NoArgsConstructor(force = true)
@AllArgsConstructor
@ToString
public class Usuario {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    private String apellidos;

    @NonNull
    @Column(name ="correo_electronico")
    private String correoElectronico;

    @NonNull
    @Column(name ="tipo_usuario")
    private Integer tipoUsuario;

    @JsonIgnore
    @OneToMany(mappedBy ="usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Mensaje> mensajes;

    @JsonIgnore
    @OneToMany(mappedBy ="usuarioDestino", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Mensaje> mensajesEnviados;

    @JsonIgnore
    @OneToOne(mappedBy ="usuario" ,cascade = CascadeType.ALL)
    private Cuenta cuenta;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public Integer getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(Integer tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public List<Mensaje> getMensajes() {
        return mensajes;
    }

    public void setMensajes(List<Mensaje> mensajes) {
        this.mensajes = mensajes;
    }

    public Cuenta getCuenta() {
        return cuenta;
    }

    public void setCuenta(Cuenta cuenta) {
        this.cuenta = cuenta;
    }
}
