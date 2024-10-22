package br.pucminas.sistema_moedas_api.DTO;

public record StudentUpdateDTO (
    String name,
    String password,
    String email,
    String CPF,
    String RG,
    Integer balance,
    StudentEducationalInstitutionDTO educationalInstitution,
    StudentCourseDTO course
){
}
