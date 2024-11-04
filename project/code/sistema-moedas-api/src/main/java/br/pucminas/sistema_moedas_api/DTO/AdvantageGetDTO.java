package br.pucminas.sistema_moedas_api.DTO;

public record AdvantageGetDTO(
    Long id,
    String name,
    String description,
    Integer cost,
    AdvantageGetCompanyDTO company
) {
}
