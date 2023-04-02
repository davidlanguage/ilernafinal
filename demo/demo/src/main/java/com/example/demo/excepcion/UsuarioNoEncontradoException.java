package com.example.demo.excepcion;

public class UsuarioNoEncontradoException extends Exception {
    public UsuarioNoEncontradoException(int id){
        super("No se ha encontrado usuario con id "+id);
    }
}
