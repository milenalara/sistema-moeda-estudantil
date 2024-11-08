package br.pucminas.sistema_moedas_api.DTO;

import java.time.LocalDateTime;

public record TransactionDTO(
    Long id,
    StudentDTO student,
    AdvantageGetDTO advantage,
    LocalDateTime dateTime
) {
}
