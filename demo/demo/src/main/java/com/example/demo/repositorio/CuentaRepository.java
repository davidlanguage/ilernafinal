package com.example.demo.repositorio;

import com.example.demo.entidad.Cuenta;
import org.springframework.data.repository.CrudRepository;

public interface CuentaRepository extends CrudRepository<Cuenta, Integer> {
    Cuenta findByUsuarioId(Integer id);
}
