package br.pucminas.sistema_moedas_api.DTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public record TransactionDTO(
    Long studentId,
    Long advantageId,
    Integer studentBalance,
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") LocalDateTime dateTime
) {
}
