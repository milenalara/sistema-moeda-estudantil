package br.pucminas.sistema_moedas_api.DTO;

public record StudentGetDTO(
    Long id,
    String name,
    String email,
    String CPF,
    String RG,
    StudentGetEducationalInstitutionDTO educationalInstitution,
    StudentGetCourseDTO course) {
}
