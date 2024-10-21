package br.pucminas.sistema_moedas_api.DTO;

public record ProfessorGetDTO(
                Long id,
                String name,
                String password,
                int saldo,
                ProfessorGetDepartmentDTO department) {
}
