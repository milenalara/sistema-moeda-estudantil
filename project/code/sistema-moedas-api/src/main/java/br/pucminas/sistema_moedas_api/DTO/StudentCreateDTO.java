package br.pucminas.sistema_moedas_api.DTO;

public record StudentCreateDTO(
    String name,
    String email,
    String CPF,
    String RG,
    Long educationalInstitutionId,
    Long courseId
) {
}
