package com.example.demo.entidad;

import lombok.*;

import javax.persistence.*;

@Table(name = "cuenta")
@Entity
@NoArgsConstructor(force = true)
@AllArgsConstructor
@ToString
public class Cuenta {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //En la base de datos, este campo tiene una restricción que hace que el valor sera único
    @NonNull
    @Column(name = "nombre_usuario")
    private String nombreUsuario;
    @NonNull
    private String contrasenya;
    @OneToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getContrasenya() {
        return contrasenya;
    }

    public void setContrasenya(String contrasenya) {
        this.contrasenya = contrasenya;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
