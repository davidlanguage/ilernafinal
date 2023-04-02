package com.example.demo.repositorio;

import com.example.demo.entidad.Mensaje;
import org.springframework.data.repository.CrudRepository;

public interface MensajeRepository extends CrudRepository<Mensaje, Integer> {
}
