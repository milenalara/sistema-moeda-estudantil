package br.pucminas.sistema_moedas_api.DTO;

import java.util.Date;

public record TransactionGetDTO(
    Long id,
    Date date,
    Integer amount,
    String description
) {}