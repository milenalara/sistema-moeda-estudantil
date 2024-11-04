package br.pucminas.sistema_moedas_api.DTO;

public record PaymentCreateDTO(
    String date,
    Integer cost,
    String description,
    Long professorId,
    Long studentId
) {
}
