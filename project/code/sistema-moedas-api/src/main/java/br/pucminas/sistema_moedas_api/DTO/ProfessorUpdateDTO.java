package br.pucminas.sistema_moedas_api.DTO;

public record ProfessorUpdateDTO (
    String name,
    String password,
    Integer balance
){
}
