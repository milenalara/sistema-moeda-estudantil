package br.pucminas.sistema_moedas_api.DTO;

public record PaymentCreateDTO(
    String date,
    Integer cost,
    Long professorId,
    Long studentId
) {
}
