package com.example.demo.excepcion;

public class CuentaNoEncontradaException extends Exception {
    public CuentaNoEncontradaException(int id){
        super("no se ha encontrado cuenta con el id "+id);
    }
}
