package br.pucminas.sistema_moedas_api.DTO;

public record TransactionCreateDTO(
    Long studentId,
    Integer amount,
    String description
) {}