package com.example.demo.excepcion;

public class MensajeNoEncontradoException extends Exception {
    public MensajeNoEncontradoException(int mensajeId) {
        super("No se ha encontrado u mensaje con el id "+mensajeId);
    }
}
