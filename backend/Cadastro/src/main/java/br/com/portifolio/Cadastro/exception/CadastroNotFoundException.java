package br.com.portifolio.Cadastro.exception;

public class CadastroNotFoundException extends RuntimeException {
    public CadastroNotFoundException(String message) {
        super(message);
    }
}
