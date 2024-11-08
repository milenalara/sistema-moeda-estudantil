package br.pucminas.sistema_moedas_api.DTO;

public record PaymentGetDTO(
    Long id,
    String date,
    String description,
    Integer cost,
    ProfessorDTO professorId,
    StudentDTO studentId
) {
}
