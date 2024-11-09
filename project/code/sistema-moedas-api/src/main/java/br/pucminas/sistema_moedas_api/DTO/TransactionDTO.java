package br.pucminas.sistema_moedas_api.DTO;

import java.time.LocalDateTime;

public record TransactionDTO(
    Long studentId,
    Long advantageId,
    Integer studentBalance,
    LocalDateTime dateTime
) {
}
