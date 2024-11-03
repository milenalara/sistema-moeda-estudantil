package br.pucminas.sistema_moedas_api.Exception;

public class IncorrectPasswordException extends RuntimeException{
  public IncorrectPasswordException(String message) {
    super(message);
  }
}
