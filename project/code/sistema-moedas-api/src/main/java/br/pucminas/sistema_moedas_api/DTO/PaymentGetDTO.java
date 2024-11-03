package br.pucminas.sistema_moedas_api.DTO;

public record PaymentGetDTO(
    Long id,
    String date,
    Integer cost,
    PaymentGetProfessorDTO professorId,
    PaymentGetStudentDTO studentId
) {
}
