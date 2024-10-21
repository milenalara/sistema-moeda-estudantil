package br.pucminas.sistema_moedas_api.DTO;

public record ProfessorCreateDTO(
    String name,
    String password,
    String CPF,
    Long departmentId
) {
}
