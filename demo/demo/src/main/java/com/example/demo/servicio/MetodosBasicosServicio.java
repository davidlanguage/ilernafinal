package com.example.demo.servicio;

import com.example.demo.excepcion.UsuarioNoEncontradoException;

import java.util.List;

public interface MetodosBasicosServicio<T> {
    public boolean crear(T t);
    public T obtener(int id) throws Exception;
    public List<T> obtenerTodos();
    public void modificar(int id, T t) throws Exception;
    public void borrar(int id) throws Exception;

}
