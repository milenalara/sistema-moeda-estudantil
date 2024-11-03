package br.pucminas.sistema_moedas_api.DTO;

public record AdvantageCreateDTO(
    String name,
    String description,
    Integer cost,
    Long companyId
) {
}
