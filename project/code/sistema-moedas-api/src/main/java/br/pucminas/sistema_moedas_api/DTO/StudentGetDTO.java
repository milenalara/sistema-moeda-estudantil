package br.pucminas.sistema_moedas_api.DTO;

public record StudentGetDTO(
    String name,
    String email,
    String CPF,
    String RG,
    StudentEducationalInstitutionDTO educationalInstitution,
    StudentCourseDTO course
) {
}
