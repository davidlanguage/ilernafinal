package com.example.demo.repositorio;

import com.example.demo.entidad.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
}
