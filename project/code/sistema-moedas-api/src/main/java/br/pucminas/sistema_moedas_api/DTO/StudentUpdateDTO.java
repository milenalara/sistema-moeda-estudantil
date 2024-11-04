package br.pucminas.sistema_moedas_api.DTO;

public record StudentUpdateDTO (
    Long id,
    String name,
    String password,
    String email,
    String CPF,
    String RG,
    Integer balance){
}
